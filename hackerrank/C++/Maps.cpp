#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <string>
#include <map>
using namespace std;


int maps() {
	/* Enter your code here. Read input from STDIN. Print output to STDOUT */
	int q;
	cin >> q;
	int opt, grade;
	string name;
	map<string, int> studentGrades;
	for (int i = 0; i < q; ++i) {
		cin >> opt;
		cin >> name;
		if (opt == 1) {
			cin >> grade;
			if (studentGrades.find(name) != studentGrades.end()) {
				studentGrades[name] += grade;
			}
			else {
				studentGrades.insert(make_pair(name, grade));
			}
		}
		else if (opt == 2) {
			studentGrades.erase(name);
		}
		else if (opt == 3) {
			if (studentGrades.find(name) != studentGrades.end()) {
				cout << studentGrades[name] << endl;
			}
			else {
				cout << "0" << endl;
			}
		}
	}
	return 0;
}
