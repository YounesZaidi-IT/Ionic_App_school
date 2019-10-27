-- phpMyAdmin SQL Dump
-- version 5.0.0-alpha1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  Dim 13 oct. 2019 à 18:24
-- Version du serveur :  5.7.27
-- Version de PHP :  7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `monenfant2`
--

-- --------------------------------------------------------

--
-- Structure de la table `enfant`
--

CREATE TABLE `enfant` (
  `id_enfant` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `date_naissance` date NOT NULL,
  `id_etablissement` int(11) NOT NULL,
  `sexe` varchar(255) NOT NULL,
  `rapport_diagnostic` text NOT NULL,
  `date_inscription_etablissement` date NOT NULL,
  `rapport_etablissement` text NOT NULL,
  `reference` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `enfant`
--

INSERT INTO `enfant` (`id_enfant`, `nom`, `prenom`, `date_naissance`, `id_etablissement`, `sexe`, `rapport_diagnostic`, `date_inscription_etablissement`, `rapport_etablissement`, `reference`) VALUES
(1, 'ikram', 'Med', '2014-01-14', 1, 'Women', 'Etymologically the word diagnosis comes from the Greek <b>(diagnosis)</b> ie knowledge.<br> Originally, the term was used in the <b>medical field</b>, it meant identification of the disease by its symptoms, more generally it can be likened to a <b>judgment</b> on a state, on a situation. Currently the diagnostic approach is used in many areas and in particular in the <b>management of businesses.</b>\r\n<br><br>\r\nThus, the strategic diagnosis constitutes the first phase of the process of <b>strategic</b> thinking, it is of crucial importance because it leads to discover and structure the problems that will call for strategic responses.\r\n<br><br>\r\nThe strategic <b>diagnosis</b> is qualified as a contingent analysis because it is related to the specificities of each company, it depends on two <b>different factors</b>: the size of the company diagnosed (SME? Large company ...) and the resources reserved for the diagnosis ( for example an SME will not have the same means and resources: financial, \r\n<br><br>\r\nhuman ... to carry out a <b>strategic diagnosis</b> as the big company) a third factor adding to these two concerning the actor charged with diagnosis (risk of subjectivity)', '2017-09-01', 'The <b>Minister</b> of Economy and Finance puts back on the table an old project that consists of turning <br>the <b>ONCF</b> into a public limited <b>company</b> The text was adopted more than a decade ago without it being applied National Airports Authority must undergo the same cure\r\nA <b>strategic</b> study is in progress, with scenarios for the creation of SA instead of ONDA\r\nThe purpose of this initiative is to instill more <b>transparency</b> and good governance in these two public institutions with commercial activities\r\n<br><br>\r\nThis is at least what came out of the presentation of <b>Mohamed Boussaid</b> before the Financial Control Commission of the House of Representatives Tuesday. It was necessary to respond to the report of the Court of <b>Auditors</b> on the management of institutions and public enterprises <b>(EEP)</b> released in June 2016\r\n<br><br>\r\nIn any case the Finance Department encourages these institutions to refocus on their core missions, while abandoning secondary activities that can be supported by the <b>private</b> sector What some of them do But beware, <br>the application of the transformation recommendation requires a thorough study for each case taking into <b>account</b> the challenges related to the nature of the public <b>limited company</b>, noted the minister', 'SY0202'),
(2, 'farid', 'injri', '2013-02-08', 2, 'Men', 'Etymologically the word diagnosis comes from the Greek <b>(diagnosis)</b> ie knowledge.<br> Originally, the term was used in the <b>medical field</b>, it meant identification of the disease by its symptoms, more generally it can be likened to a <b>judgment</b> on a state, on a situation. Currently the diagnostic approach is used in many areas and in particular in the <b>management of businesses.</b>\r\n<br><br>\r\nThus, the strategic diagnosis constitutes the first phase of the process of <b>strategic</b> thinking, it is of crucial importance because it leads to discover and structure the problems that will call for strategic responses.\r\n<br><br>\r\nThe strategic <b>diagnosis</b> is qualified as a contingent analysis because it is related to the specificities of each company, it depends on two <b>different factors</b>: the size of the company diagnosed (SME? Large company ...) and the resources reserved for the diagnosis ( for example an SME will not have the same means and resources: financial, \r\n<br><br>\r\nhuman ... to carry out a <b>strategic diagnosis</b> as the big company) a third factor adding to these two concerning the actor charged with diagnosis (risk of subjectivity)', '2016-10-01', 'The <b>Minister</b> of Economy and Finance puts back on the table an old project that consists of turning <br>the <b>ONCF</b> into a public limited <b>company</b> The text was adopted more than a decade ago without it being applied National Airports Authority must undergo the same cure\r\nA <b>strategic</b> study is in progress, with scenarios for the creation of SA instead of ONDA\r\nThe purpose of this initiative is to instill more <b>transparency</b> and good governance in these two public institutions with commercial activities\r\n<br><br>\r\nThis is at least what came out of the presentation of <b>Mohamed Boussaid</b> before the Financial Control Commission of the House of Representatives Tuesday. It was necessary to respond to the report of the Court of <b>Auditors</b> on the management of institutions and public enterprises <b>(EEP)</b> released in June 2016\r\n<br><br>\r\nIn any case the Finance Department encourages these institutions to refocus on their core missions, while abandoning secondary activities that can be supported by the <b>private</b> sector What some of them do But beware, <br>the application of the transformation recommendation requires a thorough study for each case taking into <b>account</b> the challenges related to the nature of the public <b>limited company</b>, noted the minister', 'REF16587');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `enfant`
--
ALTER TABLE `enfant`
  ADD PRIMARY KEY (`id_enfant`),
  ADD KEY `enfant_etablissement` (`id_etablissement`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `enfant`
--
ALTER TABLE `enfant`
  MODIFY `id_enfant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `enfant`
--
ALTER TABLE `enfant`
  ADD CONSTRAINT `enfant_etablissement` FOREIGN KEY (`id_etablissement`) REFERENCES `etablissement` (`id_etablissement`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

