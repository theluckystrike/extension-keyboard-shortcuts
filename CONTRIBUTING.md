# CONTRIBUTING

## REPORTING ISSUES

Before reporting an issue, please check if it has already been reported. When filing a new issue, include:

- A clear description of the problem
- Steps to reproduce the issue
- Your Chrome version and extension manifest version
- Any relevant error messages or console output

Use the issue templates provided in .github/ISSUE_TEMPLATE/ for bug reports and feature requests.

## DEVELOPMENT WORKFLOW

1. Fork the repository
2. Create a feature branch from main
3. Make your changes
4. Ensure tests pass (if any)
5. Submit a pull request

## CODE STYLE

- Use TypeScript for all new code
- Follow the existing code patterns in the repository
- Use meaningful variable and function names
- Keep functions focused and small
- Add JSDoc comments for public APIs

## TESTING

Before submitting changes, verify the build works:

```bash
npm install
npm run build
```

Check for TypeScript errors and ensure the output is correct.

## LICENSE

By contributing, you agree that your contributions will be licensed under the MIT License.
