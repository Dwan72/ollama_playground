

# todo(alean): have script grab zip package, unpack it, then transfer files into a directory inside
# json folder with parent directory named datetime/testnumber
#!/bin/bash

files=()
while IFS= read -r -d '' f; do
  files+=("$f")
done < <(find ./packed -maxdepth 1 -type f -print0)
 echo "Unpacking archive $file to archives/unpacked"

  
  unzip "$file" -d unpacked/

done


