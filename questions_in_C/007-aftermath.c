//Junior José da Silva - 22/mar

#include<stdio.h>

int main (void) {
  int i, n;
  while(scanf("%d", &n), n) {
    for (i = 1; i <= n; i++) {
      printf("%d%c", i, i == n ? '\n' : ' ');
    }
  }
  return 0;
}