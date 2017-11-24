library(tidyverse)
library(lubridate)

Br=read.csv("BR 1905-2016.csv",header=T)
head(Br)
attach(Br)
Br1= Br %>% gather(day,temperature,d1:d31)
head(Br1)
Br1= Br %>% gather(day,temperature,d1:d31) %>% unite(datestr,c(year,month,day),sep="-")
head(Br1)
Br1= Br %>% gather(day,temperature,d1:d31) %>% mutate(day=parse_number(day)) %>% 
  unite(datestr,c(year,month,day),sep="-") %>% 
  mutate(date=as.Date(datestr)) %>% 
  arrange(date) %>% 
  mutate(temperature=ifelse(temperature<(-5000),NA,temperature)) %>% 
  filter(month(date)>=10)
head(Br1)

Br2=Br1 %>% filter(!is.na(temperature))
summary(Br2)
Br2$temperature

Br3 = Br2 %>% filter(year(date)>=1981,year(date)<=2010)
summary(Br3)
