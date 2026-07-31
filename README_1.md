
# ANACONDA MyTV - IPTV Player for Android TV

![Build APK](https://github.com/YOUR_USERNAME/anaconda-mytv/actions/workflows/build-apk.yml/badge.svg)

Premium IPTV player met Formuler MyTV Online 3 design voor Android TV boxes.

## 🚀 Features
- **Auto MAC**: `00:1A:79` + laatste 6 tekens van echte `ANDROID_ID` (geen handmatig gedoe)
- **Multi-DPI**: Perfect scherp op 213 dpi (X96, TX3), 240 dpi (S905X), 320 dpi (Shield TV, Mi Box)
- **Multi-Portal**: Tot 4 portals tegelijk, met dropdowns in linker categorie frame
- **Combineer Modus**: Alle portals samenvoegen, dubbele automatisch eruit, beste kwaliteit kiezen
- **Rechter Detail Frame**: Poster + plot + cast + regisseur + similar titles bij hover
- **8 Thema's**: Gold, Midnight Blue, Crimson, Emerald, Purple Neon, Orange, Arctic White, OLED Black
- **Left/Right Layout**: Kies categorie positie top of links
- **NEW Badges + Date Filter**: Sorteren op toegevoegd datum

## 📦 Auto Build APK

Elke push naar `main` bouwt automatisch een APK!

### Stap 1: Maak GitHub repo
1. Ga naar https://github.com/new
2. Naam: `anaconda-mytv`
3. Public, geen README
4. Create

### Stap 2: Upload deze files
```bash
git init
git add .
git commit -m "ANACONDA MyTV v1.0"
git branch -M main
git remote add origin https://github.com/JOUW_USERNAME/anaconda-mytv.git
git push -u origin main
```

### Stap 3: Download APK
- Ga naar je repo → Actions → laatste run → Artifacts → Download `ANACONDA-MyTV-debug`
- Of naar Releases → download APK

De Action maakt automatisch een QR code voor je release link.

## 📱 Installeren op TV Box
1. Zet "Unknown Sources" aan in Settings > Security
2. Kopieer APK naar USB of download via Downloader app (code: jouw release URL)
3. Installeer
4. Open ANACONDA MyTV → Portal toevoegen → MAC wordt automatisch gevuld met device ID!

## 🛠️ Lokaal builden
```bash
npm install
npx cap add android
npx cap open android
# In Android Studio: Build > Build APK
```

## 📸 Screenshots
Voeg hier je screenshots toe

## ⚙️ Configuratie
- Package: `com.anaconda.mytv`
- Min SDK: 22 (Android 5.1) - werkt op alle TV boxes
- Target SDK: 34
- DPI: 213, 240, 320, plus alle andere via anyDensity

## 🔒 Signing (optioneel voor Play Store)
Voor release signing, voeg secrets toe in GitHub:
- `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`

## Made with ❤️ for ANACONDA
