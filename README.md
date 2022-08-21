# Final Project: Climate Change



 

## Final Project Team Members:

•	Assigned Role - Repository: Kofi

•	Assigned Role - Machine Learning: John

•	Assigned Role - Database: Ana



## Data Resources:


•	General Statistics (Population, GDP, etc.): The World Bank DataBank

•	Global Emissions: Our World in Data

•	USA Emissions: U.S. Energy Information Administration

•	Global Temperature: Kaggle

•	USA Temperature: National Centers for Environmental Information

•	Disasters/Extreme Weather: EM-DAT International Disasters Database

•	Food and Agriculture Organization of the United Nations



## Overview of the Project:


The FAOSTAT Temperature Change domain disseminates statistics of mean surface temperature change by country, with annual updates. The current dissemination covers the period 1961–2020. Statistics are available for monthly, seasonal, and annual mean temperature anomalies, i.e., temperature change with respect to a baseline climatology, corresponding to the period 1951–1980. The standard deviation of the temperature change of the baseline methodology is also available. Data are based on the publicly available GISTEMP data, the Global Surface Temperature Change data distributed by the National Aeronautics and Space Administration Goddard Institute for Space Studies (NASA-GISS).


We chose climate change for our final project because it is a very important issue that affects everyone on the planet. Rising temperatures, extreme weather, and natural disasters are experienced globally each year. Some studies have shown that the planet will reach a temperature of 150 degrees Fahrenheit by the year 2050. These changes in our environment indicate a need for adaptability over time across the globe. Data has been collected to better understand the nature of climate change as it relates to population growth, greenhouse gases, and temperature. Our group’s analysis hopes to determine the following:


• How have emissions changed over time?

• Is there a correlation between population growth and climate change?

• How does temperature and rate of emissions relate to extreme weather?

• What countries are most at-risk of climate change?

• Will the Earth’s temperature reach 150 degrees Fahrenheit by the year 2050? Will Arizona reach   150 degrees Fahrenheit by the year 2050?



## Software: 

Python, Jupyter Notebook, Pandas, and PostgreSQL

## Google Slides
https://docs.google.com/presentation/d/1SSLEs9GDd6zxgO7aJUOREzW75jjVbA5yn8sJpnLifls/edit?usp=sharing

## Results/Deliverables

### How have emissions changed over time?

Carbon dioxide emissions are the primary driver of global climate change. It is widely recognized that to avoid the worst impacts of climate change, the world needs to urgently reduce emissions. But how this responsibility is shared between regions, countries, and individuals has been an endless point of contention globally.


![image](https://user-images.githubusercontent.com/96086671/184540219-9ac6b75a-3899-4c4d-9433-ed98898e75a6.png)


In the chart above (Average Global Emissions Overtime) we see the average growth of global emissions from year 2000 to 2013. 

We see that at the beginning of the year 2000, CO2 emissions were very low. Growth in emissions was still relatively slow until 2001. By 2013 the world had emitted an average emission of 600 million metric tons of CO2. 

We can also see that while emissions from CO2 have increased, emissions from Methane and Nitrous Oxide have remained stabilized with very low emissions throughout the years.


![image](https://user-images.githubusercontent.com/96086671/184540263-2f2e375a-5dd3-4621-8126-f59528f949bf.png)


In the chart above (Average Global CO2 Emissions) we can see the average growth of CO2 emissions from year 1950 to 2019. In this chart we see the growth of CO2 emissions from 1950 through to 2019.

In 1950 the world emitted about 120 million metric tons of CO2. By 2019 this has almost quadrupled, reaching about 580 million metric tons of CO2 emissions. 


![image](https://user-images.githubusercontent.com/96086671/184540308-4c10c85f-caf3-4aa5-a356-87f1cadc6e20.png)


In the chart above (Change in CO2 Emissions by Country) we see the growth of global emissions by country from year 1950 to 2015.

Looking at this interactive chart shows the breakdown of global CO2 emissions by Country.

We see that until well into the 20th century, global emissions were dominated by the United States. In 1900, more of the emissions were produced in US, Russia, and China. Even In 1950, United States and Russia accounted for more than 85% of emissions each year.

In the second half of the 20th century, we see a significant rise in emissions most notably China claiming dominance over United States. We also see a significant rise in emissions in India whiles United States starts to produce low emissions.


### Is there a correlation between population growth and climate change?


![image](https://user-images.githubusercontent.com/96086671/184540641-da08ea28-d62e-48be-9bd7-debcf564caef.png)


The r-squared is: 0.26704026672554015

Linear regression is used to find a relationship between a dependent variable and one or more independent variables. 

Looking at the linear regression line above, the correlation between population growth by percent and the maximum temperature is strong to very strong because the R-value is 0.3. This means that temperature which is the y-axis depends on the population growth by percent which is the x-axis.

As the population grows, temperature also increases.


![image](https://user-images.githubusercontent.com/96086671/184540602-35bd4e7f-737f-4a69-9776-59e9b890eec0.png)


Human emissions of carbon dioxide and other greenhouse gases are a primary driver of climate change and present one of the world’s most pressing challenges. Rapid population growth worsens the impacts of climate change by straining resources and exposing more people to climate related risks especially in low-resource regions.


### How does temperature and rate of emissions relate to extreme weather?

Over the past century, massive increases in carbon dioxide, methane, and other greenhouse gas emissions have caused the temperature on our planet to rise.


![image](https://user-images.githubusercontent.com/96086671/184540965-a2ecde23-54ba-4459-9e62-325b1fc6b55a.png)


In the chart above (Comparing Avg. Temp. from the year 2000 and 2013) we see that average temperatures for year 2000 as compared to year 2013 shows that most of the countries experienced temperature increases.  

Through 2100, scientists predict hotter temperatures and more frequent and intense heat waves in every region of the U.S., according to the Union of Concerned Scientists.

Extreme heat increases demand for air conditioning, fueling carbon pollution and putting a strain our energy system that can lead to blackouts. It also poses a serious health threat, especially for the most vulnerable.


![image](https://user-images.githubusercontent.com/96086671/184540998-ddf6e274-c3ff-4f1c-a31b-b43639b8a3a2.png)


In the chart above (The Number Affected by Natural Disasters Globally Every Year) we can see that in years 2001 and 2002 the global natural disasters were very high ranging from a low of 100,000,000 of the number affected globally in 2001 to over 600,000,000 of the number affected globally in 2002. After 2002 these numbers dropped rapidly and rose to 400,000,000 in 2015 and then after dropped again in 2018 and rose slightly in 2019.

Delhi/Nairobi, 29 October 2002 - Record-breaking rains, triggering devastating floods in Europe, destruction of homes across the Caribbean and life-threatening mudslides in India, Nepal and Bangladesh, have been a key feature of 2002.

Natural catastrophes, the vast majority of which have been weather-related, have cost countries and communities an estimated $56 billion during the period January to September 2002, a preliminary study shows (Source UNEP).


![image](https://user-images.githubusercontent.com/96086671/184541014-4fcaec61-4273-4f91-85ea-aa6e849b5d4a.png)


The rapid warming, we are experiencing today can only be explained by increasing amounts of carbon dioxide and other heat-trapping gases in the atmosphere. The link between carbon dioxide in the atmosphere and rising global temperatures has been clear to scientists since the 1850s. Measurements show that there is more carbon dioxide in the atmosphere today than at any other time in the past years. (https://www.nationalacademies.org/based-on-science/climate-change-humans-are-causing-global-warming).

Looking at the chart above (The Number of Disasters Every Year) from the year 2000 to 2019. The number of disasters that occurred in 2005 was very high 440, 000,000 of number of disasters globally as compared to 2002 which was 420,000,000 of the number of disasters globally. These numbers fluctuated though out the years and in 2018 dropped drastically but then rose again to 400,000,000 of number of disasters globally in 2019.


### What countries are most at-risk of climate change?


![image](https://user-images.githubusercontent.com/96086671/184541327-91cc6d9c-07d2-4df9-ad64-0488265aace7.png)


Looking at this interactive chart (Total Greenhouse Gas Emissions) shows the breakdown of global CO2 emissions by Country.

We see that until well into the 20th century, global emissions were dominated by the United States. 

Going further into the 20th century, we see a significant rise in emissions most notably China claiming dominance over United States. For this chart countries most at risk of Climate change would be China and United States.

The interactive chart for Larger Countries shows the country Germany that emits low amounts of carbon dioxide, methane, and other greenhouse gas emissions have relatively low temperatures as compared to China and the United States. China and United States temperatures are high because of their massive increases in carbon dioxide, methane, and other greenhouse gas emissions.

The interactive chart for Smaller Countries shows Saudi Arabia is on top exhibiting high temperature figures whereas Bangladesh is at the bottom with low temperatures. This is because Saudi Arabia emits high amounts of carbon dioxide, methane, and other greenhouse gas emissions as compared to Bangladesh and the Dominican Republic.


### Will the Earth’s temperature reach 150 degrees Fahrenheit by the year 2050? Will Tucson reach 150 degrees Fahrenheit by the year 2050?


Arizona and the rest of the world will reach 150 degrees if CO2 emissions are not reduced.


  Year   Anomaly	      Metric Tons of Energy-Related CO2 per person
 
0	1970	  -0.8	           13.90

1	1971	  -1.6	           14.20

2	1972	  -0.2	           15.00

3	1973	  -1.4	           16.20

4	1974	  -0.3	           16.50

5	1975	  -1.9	           16.70

6	1976	  -0.8	           18.70

7	1977	   0.4	           20.80

8	1978	   0.0	           19.60

9	1979	  -1.0	           21.30

10	1980	  0.4	           19.30

11	1981	  1.5	           21.30

12	1982	 -1.1	           20.20

13	1983	 -0.6	           18.20

14	1984	 -0.4	           19.10

15	1985	 -0.2	           19.20

16	1986	  0.8	           17.00

17	1987	 -0.5	           16.40

18	1988	  0.4	           16.90

19	1989	  1.4	           18.10

20	1990	 -0.1	           17.10

21	1991	 -0.6	           16.90

22	1992	 -0.2	           17.10

23	1993	  0.0	           17.00

24	1994	  0.8	           16.90

25	1995	  1.2	           15.10

26	1996	  2.1	           15.00

27	1997	  0.7	           15.10

28	1998	 -0.5	           15.70

29	1999	  1.0	           16.05

30	2000	  1.9	           16.79

31	2001	  1.4	           16.85

32	2002	  1.4	           16.40

33	2003	  2.1	           16.40

34	2004	  0.6	           17.20

35	2005	  1.3	           16.70

36	2006	  1.3	           16.70

37	2007	  1.8	           16.60

38	2008	  0.8	           16.30

39	2009	  1.3	           14.80

40	2010	  0.6	           15.50

41	2011	  0.5	           15.10

42	2012	  2.3	           14.60

43	2013	  0.6	           15.00

44	2014	  2.4	           14.50

45	2015	  2.0	           13.90

46	2016	  2.4	           13.10

47	2017	  3.2	           12.80

48	2018	  2.5	           13.10

49	2019	  0.5	           12.70


R2 Score: 0.5668356048328688

R-squared value is 0.5668 which is 57%. For the purposes of this project, a good linear model is 0.2670 which is (27%) or more. By comparing the R-squared value of 0.5668 to the 0.27 value of a good linear model, it can be concluded that the model effectively predicts Metric Tons of Energy-Related CO2 per person.
Since R2 value is adopted in various research discipline, there is no standard guideline to determine the level of predictive acceptance (https://www.researchgate.net).


Looking at the table above and the Metric Tons of Energy-Related CO2 per person for the state of Arizona is very high. From 1970 to 2019 shows that through out the years each CO2 emissions by individuals ranged from 12.70 to 21.30 Metric Tons of Energy-Related. We have to keep in mind that the state of Arizona population in the coming years will increase meaning more people will emit more CO2 metric tons of energy.

Carbon dioxide emissions are the primary driver of global climate change. It’s widely recognized that to avoid the worst impacts of climate change, the world needs to urgently reduce emissions (CO2 emissions. https://ourworldindata.org/co2-emissions)


   Predictions	Actual
   
13	60.184375	  59.2

39	61.196094	  61.1

30	60.878906	  61.7

45	61.725000	  61.8

17	60.025000	  59.3

48	61.967188	  62.3

26	60.050781	  61.9

25	60.008594	  61.0

32	61.435156	  61.2

19	59.694531	  61.2

12	59.907813	  58.7

4	58.846094	   59.5

37	60.978125	  61.6

rf.score 0.34613178210694606

This score measures how many labels the model got wrong out of the total number of predictions. The rf score of 35% is the percent of predictions that were incorrect. This was calculated using Scikit-Learn using the true labels from the test set and the predicted labels for the test set.


    Prediction	Actual
   
13	59.649678	  59.2

39	61.057052	  61.1

30	60.693350	  61.7

45	61.368104	  61.8

17	59.863725	  59.3

48	61.487601	  62.3

26	60.397129	  61.9

25	60.326057	  61.0

32	60.776549	  61.2

19	60.011535	  61.2

12	59.620146	  58.7

4	59.058861	   59.5

37	61.039284	  61.6

classifier.score 0.5343182468166369

A classifier sore of 53% shows a moderate to a strong match between the data predictions and the actual outcomes. A high score indicates a strong match between the input data and the model data.
