import json
import shutil
import os
dir_path = os.path.dirname(os.path.realpath(__file__))

with open('./logo_paths.json') as data_file:    
    data = json.load(data_file)
    for channel, logo in data.items():
        src = dir_path + "/export/transparent-color" + logo
        dest = dir_path + "/export/channels/" + channel + ".png"
        try:
            shutil.copy(src, dest)
            print(src, dest)
        except IOError as e:
            print(e)

        


