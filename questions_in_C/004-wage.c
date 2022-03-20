//Junior José da Silva - 20/mar

#include<stdio.h>

int main() {
  
  char name;
  double wage, bonus;

  scanf("%s", &name);
  scanf("%lf %lf",&wage,&bonus);

  printf("TOTAL = R$ %.2f\n", (wage + (bonus*0.15)));
  
  return 0;
  
}