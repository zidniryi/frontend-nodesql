-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 09 Sep 2020 pada 03.53
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbbril_agen`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `dbo.agen`
--

CREATE TABLE `dbo.agen` (
  `id` int(11) NOT NULL,
  `no_lisensi` int(11) NOT NULL,
  `nama_agen` varchar(100) NOT NULL,
  `id_agen_level` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `status_tgl` date NOT NULL,
  `wilayah_kerja` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `dbo.agen`
--

INSERT INTO `dbo.agen` (`id`, `no_lisensi`, `nama_agen`, `id_agen_level`, `status`, `status_tgl`, `wilayah_kerja`) VALUES
(1, 10001, 'John Doe', 1, 1, '2020-09-09', 'Jakarta'),
(3, 10004, 'Jane Diana Agen', 1, 1, '2020-09-09', 'Jogjakarta');

-- --------------------------------------------------------

--
-- Struktur dari tabel `dbo.agen_level`
--

CREATE TABLE `dbo.agen_level` (
  `id` int(11) NOT NULL,
  `level` varchar(25) NOT NULL,
  `keterangan` text NOT NULL,
  `urutan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `dbo.agen_level`
--

INSERT INTO `dbo.agen_level` (`id`, `level`, `keterangan`, `urutan`) VALUES
(1, 'FU', 'Field Underwriter', 4),
(2, 'UM', 'Unit Manager', 3),
(3, 'SM', 'Sales Manager', 2),
(4, 'RM', 'Regional Manager', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `dbo.agen_struktur`
--

CREATE TABLE `dbo.agen_struktur` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `id_agen` int(11) NOT NULL,
  `berlaku_mulai` date NOT NULL,
  `berlaku_akhir` date NOT NULL,
  `status` varchar(11) NOT NULL,
  `keterangan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `dbo.agen_struktur`
--

INSERT INTO `dbo.agen_struktur` (`id`, `parent_id`, `id_agen`, `berlaku_mulai`, `berlaku_akhir`, `status`, `keterangan`) VALUES
(1, 1, 7, '2020-09-18', '2020-09-26', 'A', 'NULL'),
(2, 2, 8, '2020-09-18', '2020-09-26', 'A', 'NULL');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `dbo.agen`
--
ALTER TABLE `dbo.agen`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `dbo.agen_level`
--
ALTER TABLE `dbo.agen_level`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `dbo.agen_struktur`
--
ALTER TABLE `dbo.agen_struktur`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
