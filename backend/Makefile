clean:
	-@rm -rf ./**/__pycache__
	-@rm -rf ./**/**/__pycache__
	-@rm -rf ./**/**/**/__pycache__

flake8:
	-@flake8 . --max-complexity=5 --ignore=S311,W503,W504,S608,S105

install:
	-@pip3 install -r requirements.txt