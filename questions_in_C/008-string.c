#include <stdio.h>
#include <string.h>

int main() {

  char string1[50], string2[50] = {""};
  int cont= 0;
  
  while(cont <=2){

    printf("Enter a word for string1:");
    fgets(string1, 50, stdin);
    printf("Enter a word for string2:");
    fgets(string2, 50, stdin);

    printf("\nString1= %ld e String2= %ld\n",strlen(string1)-1, strlen(string2)-1);
    cont ++;
  }

}