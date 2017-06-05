var arr = [1,3,5,6];
function binarySearch(arr,l,r,x)
{
   if (r >= l)
   {
     var mid = parseInt((l+r)/2);
     if(arr[mid] == x) return mid;
     else if(arr[mid] < x) return binarySearch(arr,mid+1,r,x);
     else return binarySearch(arr,l,mid-1,x);
   }
   return l;
}
console.log(binarySearch(arr,0,arr.length,5));
console.log(binarySearch(arr,0,arr.length,2));
console.log(binarySearch(arr,0,arr.length,7));
console.log(binarySearch(arr,0,arr.length,0));
