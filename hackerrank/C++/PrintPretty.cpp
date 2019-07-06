#include <iostream>
#include <iomanip> 
#include <string>
using namespace std;

int prettyPrint() {
	int T; cin >> T;
	cout << setiosflags(ios::uppercase);
	cout << setw(0xf) << internal;
	while (T--) {
		double A; cin >> A;
		double B; cin >> B;
		double C; cin >> C;
		// Strip decimal and print hex of A
		//long long a = long(A);
		//cout << "0x" << std::hex << a << endl;

		// Print B to precision 2 with leading ____+ to make exactly 15 chars wide
		//cout.precision(2);
		//string b = to_string(B);
		//int pos = b.find(".");
		//int numUnderscores = 15 - (b.length() - (pos - 2) + 1);
		//for (int i = 0; i < numUnderscores; ++i) {
		//	cout << "_";
		//}
		//B >= 0 ? cout << "+" : cout << "-";
		//cout << std::fixed << B << endl;

		// Print C to 9 decimal places in scientific notation
		//cout.precision(9);
		//cout << std::scientific << C << endl;

		// Above all works but better solution is with cout format modifiers

		cout << hex << left << showbase << nouppercase;
		cout << (long long)A << endl;

		cout << dec << right << setw(15) << setfill('_') << showpos << fixed << setprecision(2);
		cout << B << endl;

		cout << scientific << uppercase << noshowpos << setprecision(9);
		cout << C << endl;
	}
	return 0;

}