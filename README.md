# node-icu
NodeJS ICU Word Segmenter

## How to install
On macOS
```
brew install intltool icu4c gettext
brew link icu4c gettext --force
```
On debian/ubuntu
```
apt-get install libicu-dev
```

## How to build
```
cd lib/
node-gyp configure build
```

## Other versions
For the python version use [python-icu](https://github.com/loretoparisi/python-icu)

## Disclaimer
Code ported from https://github.com/chakrit/node-icu-wordsplit
