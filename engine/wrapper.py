#####################################################################################
# \file wrapper.py
# \author Sudnya Padalikar
# \date Oct 25 2013
# \brief A class that reads a JSON file, does feature extraction using scipy
#####################################################################################

import sys
import json
from pprint import pprint


print 'Hello user!'
print 'Reading user info...'

#json_data=open(file_directory).read()

json_data=open('self.json').read()

with open('self.json') as data_file:    
    data = json.load(data_file)
pprint(data)


