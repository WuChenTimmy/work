-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: work
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'草莓',50.00,'採自高山溫帶氣候下的優質農田，以嚴格的管理和採收方式確保了每顆草莓都保持著鮮美的品質。'),(2,'鳳梨',40.00,'源自熱帶氣候下的優質農田，是一種具有豐富風味和營養的水果。'),(3,'芒果',60.00,'源自於熱帶氣候下的優質農田，是一種具有豐富風味和營養的水果。'),(4,'西瓜',30.00,'來自於陽光充足的農田，經過精心栽培和選擇，保證每一顆都是最佳品質。'),(5,'葡萄柚',45.00,'來自陽光充足的果園，以嚴格的質量標準種植和採摘，確保每一個葡萄柚都是最佳品質。'),(6,'柳丁',35.00,'來自溫暖的亞熱帶地區，以優質的品質和豐富的口感而聞名。'),(7,'綠皮檸檬',25.00,'來自熱帶氣候地區的優質水果，以其酸爽清新的口感和多用途的特性而受到喜愛。'),(8,'黃皮檸檬',28.00,'來自熱帶氣候地區的上乘水果，以其酸爽甜美的口感和豐富的營養成分而受到廣泛歡迎。'),(9,'綠奇異果',55.00,'來自溫暖氣候地區的上等水果，以其外表光滑、果肉多汁和營養豐富而受到廣泛歡迎。'),(10,'黃金奇異果',65.00,'從阿根廷、紐西蘭等地嚴選而來的頂級水果，以其獨特的外表、濕潤的果肉和豐富的風味而聞名。');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-03  0:41:05
