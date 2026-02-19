

push:
	@git add .
	@git commit -m "$(m)"
	@git push

init:
	@echo "Retrieving latest changes from the repository..."
	@git pull
	@echo "Installing dependencies..."
	@npm install
	@echo "Initialization complete. You can now start working on your project."

