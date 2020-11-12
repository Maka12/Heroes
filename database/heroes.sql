-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 12-Nov-2020 às 08:15
-- Versão do servidor: 10.4.10-MariaDB
-- versão do PHP: 7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `heroes`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `herois`
--

DROP TABLE IF EXISTS `herois`;
CREATE TABLE IF NOT EXISTS `herois` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `resume` varchar(220) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `herois`
--

INSERT INTO `herois` (`id`, `name`, `resume`, `description`, `image`, `created`) VALUES
(1, 'Superman', '<p>meu</p>', '<!-- Post Content -->\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>\n\n<blockquote>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n\n<p>Someone famous in <cite>Source Title</cite></p>\n</blockquote>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>', '45259857_986370824899877_4448142309564874752_o (2).jpg', '2020-11-04 23:06:43'),
(2, 'Batman', '', '', 'dario.jpg', '2020-11-04 23:06:43'),
(19, 'Tchala King', '', '<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:500px\">\n	<tbody>\n		<tr>\n			<td>Super</td>\n			<td>&nbsp;</td>\n		</tr>\n		<tr>\n			<td>&nbsp;</td>\n			<td>&nbsp;</td>\n		</tr>\n		<tr>\n			<td>&nbsp;</td>\n			<td>&nbsp;</td>\n		</tr>\n	</tbody>\n</table>\n\n<p>&nbsp;</p>', 'blackpanthermain__1_.jpg', '2020-11-04 23:06:43'),
(29, 'eetrte', '<p>ertertert</p>', '<p><strong>hdgfhfgh</strong></p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>', '12119958_161566700856711_7512286189830269124_o.jpg', '2020-11-12 07:20:18'),
(21, 'HomeLander', '', '<p>457657</p>', 'e5a60682df253641c4e49b9feebef3be.jpg', '2020-11-04 23:06:43'),
(27, 'Spiter', '<p>zdfgdg</p>', '<p>tutrerytret</p>', '45259857_986370824899877_4448142309564874752_o (2).jpg', '2020-11-05 02:42:24'),
(28, 'qdqwdw', '<p>qwdqwdqdqw</p>', '<p>qdqdqdwdwqd</p>', '12119958_161566700856711_7512286189830269124_o.jpg', '2020-11-05 10:40:14');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
