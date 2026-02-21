# 📘 Explication du Flux "Mot de Passe Oublié" 

## 🔄 Flux Complet

```
┌─────────────────────────────────────────────────┐
│         Forgot Password Component               │
│  - L'utilisateur entre son email                │
│  - Appel API: POST /auth/forgot-password        │
│  - L'email est stocké dans AuthService          │
│  - Redirection vers OTP Component               │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│            OTP Component                        │
│  - Récupère l'email depuis AuthService          │
│  - L'utilisateur entre le code OTP              │
│  - L'utilisateur entre son nouveau mot de passe │
│  - Appel API: POST /auth/verify-otp             │
│  - Redirection vers Login Component             │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│         Login Component                         │
│  - L'utilisateur peut se connecter avec         │
│    son nouveau mot de passe                     │
└─────────────────────────────────────────────────┘
```

---

## 🎯 Étape 1 : AuthService (Service Centralisé)

### Fichier: `src/app/shared/service/auth/auth.service.ts`

**Rôle du service:**
- Centralise tous les appels API d'authentification
- Utilise `BehaviorSubject` pour stocker l'email temporairement
- Les données passent d'un composant à l'autre via le service (pas via les paramètres de route)

**Méthodes importantes:**

```typescript
// Appel API pour envoyer l'OTP
forgotPassword(data: any) {
  return this.http.post(`${this.apiUrl}/auth/forgot-password`, data);
}

// Appel API pour vérifier l'OTP et réinitialiser le mot de passe
verifyOtp(data: any) {
  return this.http.post(`${this.apiUrl}/auth/verify-otp`, data);
}

// Stockage temporaire de l'email (observable)
setResetEmail(email: string): void {
  this.resetEmail.next(email);
}

getResetEmail(): string {
  return this.resetEmail.value;
}
```

**Avantages de cette approche:**
- Le service connaît l'état de toute l'application d'authentification
- L'email ne reste que temporairement en mémoire
- Gestion centralisée des erreurs possibles

---

## 🎯 Étape 2 : Component Forgot-Password

### Fichier: `src/app/auth/forgot-password/forgot-password.component.ts`

**Ce qui se passe:**

1. **L'utilisateur entre son email** dans le formulaire
2. **Validation**: On vérifie que l'email n'est pas vide
3. **Appel API**: `authService.forgotPassword({ email })`
4. **Réponse du serveur**:
   - ✅ Succès: L'email est stocké dans le service, puis on redirige vers OTP
   - ❌ Erreur: Message d'erreur s'affiche à l'utilisateur

**Structure du code:**

```typescript
email: string = '';           // Lié au formulaire via [(ngModel)]
isLoading: boolean = false;   // État durant l'appel API
errorMessage: string = '';    // Affiche les erreurs
successMessage: string = '';  // Affiche les succès

submitForgotPassword() {
  // 1. Validation
  if (!this.email) {
    this.errorMessage = 'Veuillez entrer votre adresse email';
    return;
  }
  
  // 2. Lancer le chargement
  this.isLoading = true;
  
  // 3. Appel API
  this.authService.forgotPassword({ email: this.email }).subscribe({
    next: (response) => {
      // 4. Succès
      this.successMessage = response.message;
      this.authService.setResetEmail(this.email); // ← IMPORTANT
      
      // 5. Redirection après 1.5 secondes
      setTimeout(() => {
        this.router.navigate([routes.otp]);
      }, 1500);
    },
    error: (error) => {
      // 6. Erreur
      this.errorMessage = error.error?.message || 'Erreur serveur';
    }
  });
}
```

---

## 🎯 Étape 3 : Component OTP

### Fichier: `src/app/auth/otp/otp.component.ts`

**Ce qui se passe:**

1. **À l'initialisation** (dans `ngOnInit`):
   - Récupère l'email depuis AuthService
   - Si pas d'email, redirige vers forgot-password (sécurité)

2. **L'utilisateur entre**:
   - Le code OTP reçu par email
   - Son nouveau mot de passe

3. **Appel API**: `authService.verifyOtp({ email, otpCode, newPassword })`

4. **Réponse du serveur**:
   - ✅ Succès: Redirection vers Login
   - ❌ Erreur: Message d'erreur s'affiche

**Structure du code:**

```typescript
otpCode: string = '';         // Code OTP de 6 chiffres
newPassword: string = '';     // Nouveau mot de passe
email: string = '';           // Récupéré depuis AuthService
isLoading: boolean = false;   // État durant l'appel API
errorMessage: string = '';    // Affiche les erreurs
successMessage: string = '';  // Affiche les succès

ngOnInit() {
  // Récupérer l'email stocké
  this.email = this.authService.getResetEmail();
  
  // Sécurité: sans email, on ne peut pas vérifier l'OTP
  if (!this.email) {
    this.router.navigate([routes.forgotPassword]);
  }
}

submitVerifyOtp() {
  // 1. Validation
  if (!this.otpCode || !this.newPassword) {
    this.errorMessage = 'Tous les champs sont obligatoires';
    return;
  }
  
  // 2. Lancer le chargement
  this.isLoading = true;
  
  // 3. Préparer les données (IMPORTANT: inclure l'email)
  const payload = {
    email: this.email,
    otpCode: this.otpCode,
    newPassword: this.newPassword
  };
  
  // 4. Appel API
  this.authService.verifyOtp(payload).subscribe({
    next: (response) => {
      // 5. Succès
      this.successMessage = response.message;
      
      // 6. Redirection vers Login
      setTimeout(() => {
        this.router.navigate([routes.login]);
      }, 1500);
    },
    error: (error) => {
      // 7. Erreur
      this.errorMessage = error.error?.message || 'Erreur serveur';
    }
  });
}
```

---

## 🔐 Concepts Clés Expliqués

### 1️⃣ **ngModel et Two-Way Binding**
```html
<!-- Le [(ngModel)] crée une liaison bidirectionnelle -->
<input [(ngModel)]="email" name="email">

<!-- Cela signifie:
   - Si l'utilisateur tape: email = "toto@gmail.com"
   - Si email change dans le TypeScript: input se met à jour
-->
```

### 2️⃣ **Observable et Subscribe**
```typescript
// L'API retourne une Observable (asynchrone)
this.authService.forgotPassword(data).subscribe({
  next: (response) => {      // Succès
    // response contient la réponse du serveur
  },
  error: (error) => {        // Erreur
    // error contient le message d'erreur
  }
});
```

### 3️⃣ **BehaviorSubject pour Passer les Données**
```typescript
// Dans AuthService:
private resetEmail = new BehaviorSubject<string>('');

setResetEmail(email: string) {
  this.resetEmail.next(email); // Nouvelle valeur
}

getResetEmail(): string {
  return this.resetEmail.value; // Récupérer la valeur
}

// On utilise ceci au lieu des paramètres de route:
// ❌ Mauvaise approche: this.router.navigate([routes.otp, email])
// ✅ Bonne approche: Via le service, c'est plus flexible
```

### 4️⃣ **Validation du Formulaire**
```typescript
// Avant d'appeler l'API, on valide:
if (!this.email) {
  this.errorMessage = 'Email requis';
  return; // Stop, ne pas faire l'appel API
}
```

### 5️⃣ **Gestion d'Erreur HTTP**
```typescript
error: (error: any) => {
  // error.error?.message = Message venant de l'API
  // error.status = Code HTTP (401, 500, etc.)
  this.errorMessage = error.error?.message || 'Erreur serveur';
}
```

---

## 📤 Structure des Requêtes/Réponses

### Forgot Password

**Requête:**
```json
POST http://localhost:8081/api/auth/forgot-password
{
  "email": "eyayoounsi@gmail.com"
}
```

**Réponse (Succès):**
```json
{
  "message": "Token de réinitialisation généré. Vérifiez la console!",
  "success": true,
  "data": {
    "token": "..."
  }
}
```

### Verify OTP

**Requête:**
```json
POST http://localhost:8081/api/auth/verify-otp
{
  "email": "eyayoounsi@gmail.com",
  "otpCode": "155789",
  "newPassword": "123456789"
}
```

**Réponse (Succès):**
```json
{
  "message": "Mot de passe réinitialisé avec succès",
  "success": true
}
```

---

## 🐛 Débogage / Tester Localement

### Vérifier que l'API appelle le bon endpoint:

**Dans la console du navigateur (F12):**
1. Allez dans **Network**
2. Entrez votre email et cliquez sur Submit
3. Vous devriez voir une requête POST vers:
   - `http://localhost:8081/api/auth/forgot-password`
4. Vérifiez la réponse (Status 200 = Succès)

### Vérifier les données du composant:

**Dans la console TypeScript (F12 → Console):**
```typescript
// Si vous injectez AuthService dans la console
ng.probe(document.querySelector('app-otp')).componentInstance.authService.getResetEmail()
// Doit retourner l'email stocké
```

---

## ✅ Checklist de Vérification

- [ ] AuthService a `forgotPassword()` et `verifyOtp()`
- [ ] AuthService a `setResetEmail()` et `getResetEmail()`
- [ ] ForgotPassword appelle `submitForgotPassword()` au submit
- [ ] OTP appelle `submitVerifyOtp()` au submit
- [ ] OTP récupère l'email dans `ngOnInit()`
- [ ] Les messages d'erreur s'affichent avec `*ngIf="errorMessage"`
- [ ] Les messages de succès s'affichent avec `*ngIf="successMessage"`
- [ ] Le bouton est désactivé pendant le chargement `[disabled]="isLoading"`

---

## 🚀 Prochaines Étapes pour Améliorer

1. **Ajouter une validation d'email côté client**
   ```typescript
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(this.email)) {
     this.errorMessage = 'Email invalide';
   }
   ```

2. **Ajouter un timer pour la résend OTP**
   - Après 30 secondes, permettre à l'utilisateur de renvoyer un OTP

3. **Stocker les tokens sécurisés**
   - Après succès, on peut stocker le token dans localStorage

4. **Ajouter des notifications Toast**
   - Au lieu d'alertes basiques, utiliser une notification élégante

---

Voilà ! Vous avez maintenant une intégration complète et sécurisée du flux "Mot de Passe Oublié" ! 🎉
