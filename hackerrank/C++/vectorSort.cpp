#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    vector<int> v;
    int n, x;
    cin >> n;
    while (n > 0) {
        cin >> x;
        v.push_back(x);
        --n;
    }
    sort(v.begin(), v.end());
    for(int i = 0; i < v.size(); ++i) {
        cout << v[i] << " ";
    }
    
    return 0;
}
