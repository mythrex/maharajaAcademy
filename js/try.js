var arr = [2,3,4,7,8,5];
function binarySearch(arr,l,r,x)
{
   if (r >= l)
   {
     var mid = (l+r)/2;
     if(arr[mid] == x) return mid;
     else if(arr[mid] < x) return binarySearch(arr,mid+1,r,x);
     else return binarySearch(arr,l,mid-1,x);
   }
   return l;
}
var res = binarySearch(arr,0,arr.length,6);
console.log(res);
