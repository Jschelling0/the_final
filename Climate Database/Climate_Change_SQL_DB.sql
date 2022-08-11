-- Creating tables for AZ Annual Average Temps
CREATE TABLE AZ_Annual_Average_Temps (
     State VARCHAR,
	 Year VARCHAR,
	 Degrees_Fahrenheit VARCHAR,
	 Anomaly VARCHAR
 );
 
 
 -- Creating tables for AAZ_CO2_Fossil_Fuels_Residential
CREATE TABLE AZ_CO2_Fossil_Fuels_Residential (
     State VARCHAR,
	 Year VARCHAR,
	 Coal VARCHAR,
	 Petroleum_Products VARCHAR,
	 Natural_Gas VARCHAR,
	 Total VARCHAR
 );
 
 
  -- Creating tables for AZ_CO2_Fossil_Fuels_Commercial
CREATE TABLE AZ_CO2_Fossil_Fuels_Commercial (
     State VARCHAR,
	 Year VARCHAR,
	 Coal VARCHAR,
	 Petroleum_Products VARCHAR,
	 Natural_Gas VARCHAR,
	 Total VARCHAR
 );
 
 
   -- Creating tables for AZ_CO2_Fossil_Fuels_Industrial
CREATE TABLE AZ_CO2_Fossil_Fuels_Industrial (
     State VARCHAR,
	 Year VARCHAR,
	 Coal VARCHAR,
	 Petroleum_Products VARCHAR,
	 Natural_Gas VARCHAR,
	 Total VARCHAR
 );
 
 
   -- Creating tables for AZ_CO2_Fossil_Fuels_Transportation
CREATE TABLE AZ_CO2_Fossil_Fuels_Transportation (
     State VARCHAR,
	 Year VARCHAR,
	 Coal VARCHAR,
	 Petroleum_Products VARCHAR,
	 Natural_Gas VARCHAR,
	 Total VARCHAR
 );
 
 
   -- Creating tables for AZ_CO2_Fossil_Fuels_Electric_Power
CREATE TABLE AZ_CO2_Fossil_Fuels_Electric_Power (
     State VARCHAR,
	 Year VARCHAR,
	 Coal VARCHAR,
	 Petroleum_Products VARCHAR,
	 Natural_Gas VARCHAR,
	 Total VARCHAR
 );
 
 
   -- Creating tables for AZ_CO2_Fossil_Fuel_Totals
CREATE TABLE AZ_CO2_Fossil_Fuel_Totals (
     State VARCHAR,
	 Year VARCHAR,
	 Coal VARCHAR,
	 Petroleum_Products VARCHAR,
	 Natural_Gas VARCHAR
 );
 
 
 -- Creating tables for AZ CO2 Per Capita
CREATE TABLE AZ_CO2_Per_Capita (
     State VARCHAR,
	 Year VARCHAR,
	 Metric_Ton_Energy_Released_CO2_Per_Person VARCHAR
 );
 
 
  -- Creating tables for AZ Energy Related CO2
CREATE TABLE AZ_Energy_Related_CO2 (
     State VARCHAR,
	 Year VARCHAR,
	 Million_Metric_Ton_of_Energy_Related_CO2 VARCHAR
 );
 
 
 -- Creating tables for AZ Monthly Average Temps
CREATE TABLE AZ_Monthly_Average_Temps (
     State VARCHAR,
	 Month VARCHAR,
	 Year VARCHAR,
	 Degrees_Fahrenheit VARCHAR,
	 Anomaly VARCHAR
 );


 -- Joining temps_bycountry_clean and emissions_clean tables
SELECT temps_bycountry_clean.avg_temp_c,
     temps_bycountry_clean.avg_temp_f
FROM temps_bycountry_clean
INNER JOIN emissions_clean
ON temps_bycountry_clean.country = emissions_clean.country;