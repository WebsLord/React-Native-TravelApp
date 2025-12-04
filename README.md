# Mobile Programming - Lab 08: Travel Guide App

**Student Name:** Efe  
**Student ID:** [Öğrenci Numaranızı Buraya Yazın]  
**Date:** 04.12.2025

---

## 🇬🇧 English Description

### Project Overview
This project is a **Travel Guide Application** developed as part of the Mobile Programming course (Lab 08 - React Native Lab 3). The main objective is to demonstrate **React Navigation** capabilities by moving from a single-screen app to a professional multi-screen experience using **Stack** and **Bottom Tab** navigators.

### Features
* **Bottom Tab Navigation:** Users can switch between the "Explore" (Home) and "Settings" tabs seamlessly.
* **Stack Navigation:** Within the Explore tab, users can navigate from the Home screen to a Details screen.
* **Data Passing:** The app demonstrates passing data (Place Name and Rating) between screens via route parameters.
* **Custom Styling:** Includes custom header styles, vector icons (Ionicons), and conditional rendering based on data (e.g., special message for 5-star ratings).

### Project Structure
* `App.js`: The main entry point containing the Navigation Container and Tab Navigator setup.
* `screens/HomeScreen.js`: The main dashboard listing travel destinations.
* `screens/DetailsScreen.js`: Displays details about a selected location and receives data from the Home screen.
* `screens/SettingsScreen.js`: A separate tab screen displaying app information.

### How to Run
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/TravelApp.git](https://github.com/YOUR_USERNAME/TravelApp.git)
    cd TravelApp
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the application:**
    ```bash
    npx expo start
    ```

---

## 🇹🇷 Türkçe Açıklama

### Proje Özeti
Bu proje, Mobil Programlama dersi (Lab 08 - React Native Lab 3) kapsamında geliştirilmiş bir **Gezi Rehberi Uygulamasıdır**. Temel amaç, **React Navigation** kütüphanesini kullanarak tek ekranlı bir yapıdan; **Stack (Yığın)** ve **Bottom Tab (Alt Menü)** navigasyonlarını içeren çok ekranlı, profesyonel bir yapıya geçişi örneklendirmektir.

### Özellikler
* **Alt Menü (Tab) Navigasyonu:** Kullanıcılar "Explore" (Keşfet) ve "Settings" (Ayarlar) sekmeleri arasında geçiş yapabilir.
* **Yığın (Stack) Navigasyonu:** Keşfet sekmesi içinde, Ana Sayfa'dan Detay sayfasına geçiş yapılabilir (iç içe navigasyon).
* **Veri Taşıma:** Sayfalar arası parametre gönderme işlemi (Şehir Adı ve Puan) uygulanmıştır.
* **Özelleştirilmiş Tasarım:** Özel header stilleri, vektör ikonlar (Ionicons) ve puana göre değişen dinamik içerik gösterimi içerir.

### Proje Yapısı
* `App.js`: Navigasyon konteynerini ve Tab yapısını barındıran ana dosya.
* `screens/HomeScreen.js`: Gezilecek yerlerin listelendiği ana ekran.
* `screens/DetailsScreen.js`: Seçilen yerin detaylarını gösteren ve parametre alan ekran.
* `screens/SettingsScreen.js`: Uygulama bilgilerini gösteren ayrı bir sekme.

### Nasıl Çalıştırılır
1.  **Projeyi klonlayın:**
    ```bash
    git clone [https://github.com/KULLANICI_ADINIZ/TravelApp.git](https://github.com/KULLANICI_ADINIZ/TravelApp.git)
    cd TravelApp
    ```
2.  **Gerekli paketleri yükleyin:**
    ```bash
    npm install
    ```
3.  **Uygulamayı başlatın:**
    ```bash
    npx expo start
    ```
