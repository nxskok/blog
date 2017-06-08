library(tidyverse)
library(rvest)
library(stringr)

res2008=read_html("http://www.baseball-reference.com/leagues/MLB/2008-schedule.shtml")
res2008
paragraphs=res2008 %>% html_nodes("p")
classes=paragraphs %>% html_attr("class")
texts=paragraphs %>% html_text()
tibble(txt=texts,cl=classes) %>% count(cl)
d=tibble(txt=texts,cl=classes) %>% 
  filter(cl=="game") 
d$txt
m=str_split(d$txt,"\n",simplify=T)
m[1:10,4]
m[1:10,7]
m[1:10,5]
m[1:10,8]

parse_number(m[1:10,5])

scores=tibble(t1=m[,4],t2=m[,7],s1=parse_number(m[,5]),s2=parse_number(m[,8]))
scores
scores %>% count(t2)
unique(scores$t2)
