

push:
	@echo "Pushing changes to repository..."
	@git add .
	@read -p "Enter commit message: " msg; \
	git commit -m "$$msg"
	@git push origin main
	@echo "Changes pushed successfully."

init:
	@echo "Retrieving latest changes from the repository..."
	@git pull
	@echo "Installing dependencies..."
	@npm install
	@echo "Initialization complete. You can now start working on your project."

