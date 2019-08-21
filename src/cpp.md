# C++
* [C++ Tutorials Point](https://www.tutorialspoint.com/cplusplus/cpp_overview.htm)
* [C++ Tutorial](https://www.youtube.com/watch?v=DamuE8TM3xo&list=PLGLfVvz_LVvQ9S8YSV0iDsuEU8v11yP9M)
* [Qt Tutorial](https://www.youtube.com/watch?v=I96uPDifZ1w&list=PLGLfVvz_LVvQ9S8YSV0iDsuEU8v11yP9M&index=25)

### What is C++?
C++ — компилируемый, статически типизированный язык программирования общего назначения. 
C++ широко используется для разработки программного обеспечения, являясь одним из самых популярных языков программирования.

### Requirements
* [MinGW](https://sourceforge.net/projects/mingw/files/) - набор инструментов разработки программного обеспечения для создания приложений под Windows.
* [Netbeans](https://netbeans.org/downloads/8.2/) - IDE для написания кода


### Installation `MinGW`
После установки, откроеться `MinGW Installer` окно в котором нужно отметить пакеты для компиляции:
 * **mingw-developer-toolkit**
 * **mingw32-base**
 * **mingw32-gcc-g++**
 * **msys-base**

<br>

Добавить MinGW в переменныу среды, а именно в **Path**, `MinGW\bin` & `MinGW\msys\1.0\bin`
```
....ppData\Roaming\npm;C:\MinGW\bin;C:\MinGW\msys\1.0\bin;
```
<br>

После закачки пакетов проверяем работу компилятора
```bash
cmd> g++ --version

g++.exe (MinGW.org GCC-6.3.0-1) 6.3.0
Copyright (C) 2016 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

### First programm
```C
// main.cpp
#include <iostream>

using namespace std;

int main() {
    
	cout << "Hello there";
  cin.get(); // for holding window

	return 0;
}
```

```bash
cmd> g++ main.cpp -o first_app
```
