@echo off

cd docs

git add 2020-zhubing-resume.md

git commit -m 'update'

git push -u origin master

mshta vbscript:msgbox("�ύ���",64,"batch script")(window.close)