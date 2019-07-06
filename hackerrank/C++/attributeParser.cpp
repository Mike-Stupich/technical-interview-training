#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <string>
#include <map>
#include <sstream>
using namespace std;


int attrParser() {
	int n, q;
	string currLine, tagPreamble = "";
	map<string, string> attrDB;
	// Read in N and Q
	cin >> n >> q;
	cin.ignore();
	
	// Read in each line of attributes
	for (int i = 0; i < n; ++i) {
		getline(cin, currLine);
		stringstream ss(currLine);
		string word, attr, value;
		size_t pos;

		// Breaks each line into chunk delim with space
		while (getline(ss, word, ' ')) {
			// If word is an open tag
			if (word[0] == '<') {
				string tag;
				if (word[1] == '/') { // Tag is closing
					tag = word.substr(2);
					tag = tag.substr(0, tag.length() - 1);
					pos = tagPreamble.find("." + tag);
					if (pos == string::npos) {
						tagPreamble = "";
					}
					else {
						tagPreamble = tagPreamble.substr(0, pos);
					}
				}
				else { // Tag is opening. Get entire contents of tag and set tagPreamble
					tag = word.substr(1);
					if (tag.find(">") != string::npos) {
						tag = tag.substr(0, tag.length() - 1); // Get rid of closing >
					}
					if (tagPreamble == "") {
						tagPreamble = tag;
					}
					else {
						tagPreamble = tagPreamble + "." + tag;
					}
					
				}
			}
			// Value has been found, insert into map
			else if (word[0] == '"') {
				pos = word.find_last_of('"');
				value = word.substr(1, pos - 1);
				attrDB[attr] = value;
			}
			// Attribute name found, set attr
			else if (word[0] != '=') {
				attr = tagPreamble + "~" + word;
			}
		}
	}

	// Read Q queries and print their value or Not Found!
	for (int i = 0; i < q; ++i) {
		getline(cin, currLine);
		if (attrDB.find(currLine) == attrDB.end()) {
			cout << "Not Found!" << endl;
		}
		else {
			cout << attrDB[currLine] << endl;
		}
	}
	
	return 0;
}