export const ex5 = lcm.bind(this, 20);

export function lcm(n) {
  let ans = 1;
  for (let i = 1; i <= n; i++)
    ans = (ans * i) / (gcd(ans, i));
  return ans;
}

function gcd(a, b) {
  return (b === 0) ? a : gcd(b, a % b);
}