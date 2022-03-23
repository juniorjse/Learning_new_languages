//Junior José da Silva - 22/mar

#include<stdio.h>

int main() {

    float one = 4.00;
    float two = 4.50;
    float three = 5.00;
    float for4 = 2.00;
    float five = 1.50;
    float num, escolha;

    scanf("%f %f",&num, &escolha);

    if (num == 1){
      escolha = one *escolha;
    }
    else if (num == 2){
      escolha = two * escolha;
    }
      else if (num == 3){
      escolha = three * escolha;
    }
      else if (num == 4){
      escolha = for4 * escolha;
    }
      else if (num == five){
      escolha = five * escolha;
    }
    
    printf("Total: R$ %.2f\n", escolha);

    return 0;
}