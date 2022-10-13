#!/bin/bash
# script para renomear varias imagens numericamente.
# git@jonas-andrade
##

num=0
for i in `ls img/`; do
  mv img/$i $num.jpg
  num=$(($num+1))
done
