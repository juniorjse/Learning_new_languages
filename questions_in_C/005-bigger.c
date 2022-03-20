//Junior José da Silva - 20/mar

#include<stdio.h>

int main() {

  int arr[3];
  int bigger = 0;

  scanf("%d %d %d", &arr[0], &arr[1], &arr[2]);

  for (int i = 0; i <3; i++){

    if (arr[i] > bigger){
      bigger = arr[i];
    
    }
  }

    printf("%d eh o maior\n", bigger);

  return 0;
}