function is_prime(n){	
if (n==1) return false;
for(let i=2;i<=n**(1/2);i++){
	if(n%i==0)return false;}
	return true;
}
console.log(is_prime(13));
