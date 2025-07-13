# Aksamedia Techinal Test ✨

> Aplikasi web modern untuk manajemen karyawan dan analisis psikotes, dibangun dengan **React** dan **Laravel**.

![Project Status](https://img.shields.io/badge/status-in%20development-yellowgreen?style=for-the-badge) ![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react) ![Backend](https://img.shields.io/badge/Backend-Laravel-FF2D20?style=for-the-badge&logo=laravel) ![Hosted On](https://img.shields.io/badge/Hosted-Vercel-black?style=for-the-badge&logo=vercel)

Aplikasi ini berbasis web yang dirancang untuk menyederhanakan manajemen data karyawan dan visualisasi hasil tes psikologi. Aplikasi ini memiliki UI yang menarik dan responsif dengan backend yang digunakan untuk mengelola semua operasi data.

## 🚀 Link Aplikasi

- **Frontend (Live Demo):** [Click Here](https://aksamedia-ivan-frontend.vercel.app/)
- **Backend (Base URL API):** [Click Here](https://aksamedia-ivan-backend.vercel.app/)


## ⭐ Fitur Utama

-   Manajemen data karyawan dan divisi melalui sistem CRUD.
-   Upload foto yang terhubung langsung ke Cloudinary.
-   Visualisasi data tes (RT & ST) dengan tabel dan grafik.
-   Tersedia tema Light & Dark Mode.
-   Desain responsif yang optimal di semua perangkat.
-   Sistem autentikasi aman dengan login & logout khusus admin.


## 🛠️ Tech

| Kategori | Teknologi |
| :--- | :--- |
| **Frontend** | `React`, `Tailwind CSS`, `Axios`, `Recharts` |
| **Backend** | `Laravel 10`, `PHP 8.1+`, `Sanctum` |
| **Database** | `MySQL` |
| **Deployment** | `Vercel` (Frontend & Backend) |
| **Lainnya** | `Cloudinary` (Image Hosting) |

---

## 🖼️ Tampilan Aplikasi

Berikut adalah beberapa cuplikan tampilan dari Aksamedia Panel.

| Light Mode | Dark Mode |
| :---: | :---: |
| ![Tampilan Light Mode](https://hackmd.io/_uploads/HJXpSBZLlg.png) | ![Tampilan Dark Mode](https://hackmd.io/_uploads/HyNk8B-8ee.png) |

| Visualisasi Data | Tampilan Mobile |
| :---: | :---: |
| ![Visualisasi Data](https://hackmd.io/_uploads/ByRzUB-Ixx.png) | ![Tampilan Mobile](https://hackmd.io/_uploads/H1sEUrbLgg.png) |


## 🔌 Dokumentasi API

| # | Endpoint | Metode | Deskripsi |
|:---|:---|:---|:---|
| 1 | `/login` | `POST` | Autentikasi admin untuk mendapatkan token. |
| 2 | `/logout` | `POST` | Mengakhiri sesi dan membatalkan token. |
| 3 | `/divisions` | `GET` | Mendapatkan daftar semua divisi. |
| 4 | `/employees`| `GET` | Mendapatkan daftar karyawan. |
| 5 | `/employees`| `POST` | Membuat data karyawan baru. |
| 6 | `/employees/{uuid}`| `POST` | Memperbarui data karyawan. |
| 7 | `/employees/{uuid}`| `DELETE`| Menghapus data karyawan. |
| 8 | `/nilaiRT` | `GET` | Mendapatkan data nilai *Realistic Test* (RT). |
| 9 | `/nilaiST` | `GET` | Mendapatkan data nilai *Structure Test* (ST). |

---
