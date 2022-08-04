-- Creating tables for countries
CREATE TABLE countries (
     country_codes VARCHAR,
	 country_name VARCHAR,
	 capital_city VARCHAR,
	 region VARCHAR,
	 income_group VARCHAR,
     lending_category VARCHAR
 );


-- Creating tables for disasters_clean
CREATE TABLE disasters_clean (
     year INT NOT NULL,
	 country VARCHAR NOT NULL,
	 ISO VARCHAR,
	 region VARCHAR,
	 continent VARCHAR NOT NULL,
     disaster_group VARCHAR,
     disaster_subgroup VARCHAR,
	 disaster_type VARCHAR,
	 disaster_subtype_a VARCHAR,
	 disaster_subtype_b VARCHAR,
	 total_deaths VARCHAR,
	 total_affected VARCHAR,
	 latitude VARCHAR,
	 longitude VARCHAR	
);


-- Creating tables for emissions_clean
CREATE TABLE emissions_clean (
	 ISO VARCHAR,
	 country VARCHAR NOT NULL,
	 year INT NOT NULL,
     CO2 VARCHAR,
	 methane VARCHAR,
	 nitrous_oxide VARCHAR,
	 total_ghg VARCHAR	 
);


-- Creating tables for factors_clean
CREATE TABLE factors_clean (
	 ISO VARCHAR NOT NULL,
	country VARCHAR NOT NULL,
	region VARCHAR NOT NULL,
    year INT NOT NULL,
	pop_total VARCHAR,
	pop_growth VARCHAR,
	gdp VARCHAR,
	imports VARCHAR,
	exports VARCHAR,
	average_precip VARCHAR
);


-- Creating tables for temps_bycity_clean
CREATE TABLE temps_bycity_clean (
     year INT NOT NULL,
	 month VARCHAR NOT NULL,
	 date DATE NOT NULL,
	 city VARCHAR NOT NULL,
	 country VARCHAR NOT NULL,
	 avg_temp_c VARCHAR,
	 avg_temp_f VARCHAR,
     longitude VARCHAR,
	 latitude VARCHAR
);


-- Creating tables for temps_bycountry_clean
CREATE TABLE temps_bycountry_clean (
	 country VARCHAR NOT NULL,
     year INT NOT NULL,
	avg_temp_c VARCHAR,
	avg_temp_f VARCHAR
);