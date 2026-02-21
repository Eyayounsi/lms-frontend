# 🧪 Guide de Test - Flux "Mot de Passe Oublié"

## ✅ Prérequis
- Backend Spring Boot lancé sur `http://localhost:8081`
- Frontend Angular lancé sur `http://localhost:4200`
- Les endpoints testés dans Postman fonctionnent

---

## 🚀 Tester le Flux Complet

### Étape 1 : Aller à la page Forgot Password

1. Allez à `http://localhost:4200/auth/forgot-password`
2. Vous devriez voir le formulaire avec:
   - Titre: "Forgot Password"
   - Champ email avec icône SMS
   - Bouton "Submit"

---

### Étape 2 : Tester l'Envoi d'Email

1. **Ouvrir la Console du Navigateur** (F12 → Onglet Network)
2. Entrer un email valide: `eyayoounsi@gmail.com`
3. Cliquer sur "Submit"
4. **Vous devriez voir**:
   ```
   ✅ Requête POST : http://localhost:8081/api/auth/forgot-password
   ✅ Status: 200
   ✅ Message de succès affiché: "Token de réinitialisation généré. Vérifiez la console!"
   ✅ Redirection automatique vers /auth/otp après 1.5 sec
   ```

**Si Erreur:**
- Status 400: Email invalide ou n'existe pas
- Status 500: Erreur serveur
- Vérifiez la console du backend pour plus de détails

---

### Étape 3 : Tester la Page OTP

1. **Vérifier que vous êtes redirigé** vers `http://localhost:4200/auth/otp`
2. **Vous devriez voir**:
   - Email masqué: `ey***ni@gmail.com` (pour la sécurité)
   - Champ OTP (6 chiffres)
   - Champ "New Password"
   - Icône d'oeil pour afficher/masquer le mot de passe
   - Timer 09:59
   - Bouton "Verify & Proceed"

---

### Étape 4 : Tester la Vérification de l'OTP

1. **Ouvrir la Console du Navigateur** (F12 → Onglet Network)
2. **Récupérer le code OTP**:
   - Le code a été envoyé à votre email
   - OU vérifiez la console du backend Spring Boot (vous avez dit "Vérifiez la console!")
   - Par exemple: `155789`

3. **Entrer les données**:
   - OTP Code: `155789`
   - New Password: `MonNewPassword123`

4. **Cliquer sur "Verify & Proceed"**

5. **Vous devriez voir**:
   ```
   ✅ Requête POST : http://localhost:8081/api/auth/verify-otp
   ✅ Payload envoyé:
      {
        "email": "eyayoounsi@gmail.com",
        "otpCode": "155789",
        "newPassword": "MonNewPassword123"
      }
   ✅ Status: 200
   ✅ Message: "Mot de passe réinitialisé avec succès"
   ✅ Redirection automatique vers /auth/login après 1.5 sec
   ```

---

### Étape 5 : Tester la Connexion avec le Nouveau Mot de Passe

1. Après redirection vers la page Login
2. Entrez les identifiants:
   - Email: `eyayoounsi@gmail.com`
   - Password: `MonNewPassword123`
3. Cliquez sur "Sign In"
4. Vous devriez être connecté ✅

---

## 🔍 Débogage avec les Outils du Navigateur

### Vérifier les Appels API (Network Tab)

**Pour Forgot Password:**
```
URL: http://localhost:8081/api/auth/forgot-password
Méthode: POST
Headers:
  Content-Type: application/json
Body (Request):
  {
    "email": "eyayoounsi@gmail.com"
  }
Response (200):
  {
    "message": "Token de réinitialisation généré. Vérifiez la console!",
    "success": true,
    "data": {
      "token": "..."
    }
  }
```

**Pour Verify OTP:**
```
URL: http://localhost:8081/api/auth/verify-otp
Méthode: POST
Headers:
  Content-Type: application/json
Body (Request):
  {
    "email": "eyayoounsi@gmail.com",
    "otpCode": "155789",
    "newPassword": "123456789"
  }
Response (200):
  {
    "message": "Mot de passe réinitialisé avec succès",
    "success": true
  }
```

---

### Vérifier les Données en TypeScript (Console)

**Pour Vérifier l'Email Stocké:**
```javascript
// Dans la console du navigateur (F12 → Console)
// Vérifie que l'email est bien stocker dans le Service

// 1. Aller sur la page OTP
// 2. Entrer dans la console:
ng.probe(document.querySelector('app-otp')).componentInstance.email
// Doit afficher: "eyayoounsi@gmail.com"
```

**Pour Vérifier les Messages d'Erreur:**
```javascript
// Après avoir cliqué Submit avec un email vide
ng.probe(document.querySelector('app-forgot-password')).componentInstance.errorMessage
// Doit afficher: "Veuillez entrer votre adresse email"
```

---

## ❌ Gestion des Erreurs

### 1️⃣ Email Vide
- **Behavior**: Message d'erreur côté client
- **Message**: "Veuillez entrer votre adresse email"
- **API Call**: ❌ Non appellée

### 2️⃣ Email Invalide (format)
```
- À rajouter: Validation regex côté client
- Message: "Format d'email invalide"
```

### 3️⃣ Email N'existe Pas
- **API Response**: 404 ou 400
- **Message**: Message du backend s'affiche
- **Behavior**: Affiche l'erreur, pas de redirection

### 4️⃣ OTP Incorrect
- **API Response**: 400
- **Message**: "Code OTP invalide ou expiré"
- **Behavior**: L'utilisateur peut réessayer

### 5️⃣ Mot de Passe Trop Court
```typescript
// Validation côté client (ligne 126 du composant OTP)
if (this.newPassword.length < 6) {
  this.errorMessage = 'Le mot de passe doit faire au moins 6 caractères';
  return;
}
```

### 6️⃣ Erreur Réseau
- **Behavior**: Message "Une erreur est survenue. Veuillez réessayer."
- **Vérifier**: Que le backend est bien lancé

---

## 🔐 Points Importantes à Vérifier

### ✅ Sécurité

1. **Email Masqué sur OTP**
   - Au lieu de: `eyayoounsi@gmail.com`
   - Affichage: `ey***ni@gmail.com` ✅
   - Vérifie: Ligne 41 du composant OTP → `maskEmail()`

2. **Email Stocké à partir du Service**
   - Pas de paramètres de route
   - Utilise `BehaviorSubject` dans le service
   - Si on accède directement à `/auth/otp`: Redirection vers `/auth/forgot-password`

3. **Validation côté Client**
   - Email non vide
   - OTP non vide
   - Mot de passe minimum 6 caractères

4. **Pas d'Affichage du Mot de Passe en Clair**
   - Champ avec type="password"
   - Icône d'oeil pour afficher/masquer

---

## 📊 Trace d'Exécution

```
1. Utilisateur accède à /auth/forgot-password
   ├─> Composant ForgotPassword initialisé
   └─> HTML avec formulaire email

2. Utilisateur entre email + clique Submit
   ├─> submitForgotPassword() appelée
   ├─> Validation email (non vide)
   ├─> isLoading = true (bouton désactivé)
   ├─> POST /api/auth/forgot-password
   └─> Attendre réponse API

3. API répond ✅
   ├─> isLoading = false
   ├─> successMessage = "OTP envoyé à votre email!"
   ├─> authService.setResetEmail(email) ← IMPORTANT
   ├─> setTimeout 1.5 sec
   └─> router.navigate([routes.otp])

4. Redirection vers /auth/otp
   ├─> Composant OTP initialisé
   ├─> ngOnInit(): email = authService.getResetEmail()
   ├─> Si email vide → redirection vers /auth/forgot-password
   └─> HTML avec formulaire OTP + Password

5. Utilisateur entre OTP + Password + clique Verify
   ├─> submitVerifyOtp() appelée
   ├─> Validation (OTP, Password non vides)
   ├─> Validation (length >= 6)
   ├─> isLoading = true (bouton désactivé)
   ├─> POST /api/auth/verify-otp
   └─> Attendre réponse API

6. API répond ✅
   ├─> isLoading = false
   ├─> successMessage = "Mot de passe réinitialisé avec succès"
   ├─> setTimeout 1.5 sec
   └─> router.navigate([routes.login])

7. Redirection vers /auth/login
   └─> Utilisateur peut se connecter avec new password
```

---

## 🛠️ Troubleshooting

### Problème: Page OTP affiche "veuillez aller à forgot-password"
**Cause**: Email pas stocké (accès direct à /auth/otp?)
**Solution**: Toujours passer par /auth/forgot-password d'abord

### Problème: Bouton reste "Loading..." indéfiniment
**Cause**: API hang ou réponse incomplète
**Solution**: 
- Vérifier F12 → Network → Status de l'API
- Vérifier logs du backend

### Problème: Email ne correspondons pas au code OTP reçu
**Cause**: L'utilisateur a changé d'email ou session perdue
**Solution**: 
- Vérifier le maskedEmail() affiche le bon email
- Vérifier logs: console du backend pour voir quel email a reçu l'OTP

### Problème: Erreur CORS
**Cause**: Backend n'autorise pas les requêtes cross-origin
**Solution**: Vérifier configuration Spring Boot:
```java
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                    .allowedOrigins("http://localhost:4200")
                    .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }
}
```

---

## 📝 Checklist de Test

- [ ] Page Forgot-Password charge sans erreur
- [ ] Champ email bind correctement avec [(ngModel)]
- [ ] Soumission sans email → erreur affichée
- [ ] Soumission email valide → API appelée (F12 Network)
- [ ] API retourne 200 → message de succès affiche
- [ ] Redirection vers /auth/otp après 1.5 sec
- [ ] Page OTP affiche email masqué correct
- [ ] Champ OTP + Password présents
- [ ] Toggle Password affiche/masque le mot de passe
- [ ] Soumission sans OTP → erreur affichée
- [ ] Soumission sans Password → erreur affichée
- [ ] Soumission password < 6 caractères → erreur affichée
- [ ] Soumission OTP + Password valides → API appelée
- [ ] API retourne 200 → message de succès affiche
- [ ] Redirection vers /auth/login après 1.5 sec
- [ ] Connexion au login avec nouveau password → ✅ succès

---

Bonne chance avec les tests ! 🎉 Si vous rencontrez des problèmes, vérifiez d'abord la console (F12 Network) pour voir les requêtes API.
