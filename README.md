# DAEGR

**D**ownload **a**nd **e**xtract a **G**itHub **r**epository.

```shell
Usage
    $ daegr <repo> <path> [options]

Options
    -b, --branch     The branch to be used. (defaults to `master`)
    -v, --version    Displays current version
    -h, --help       Displays this message

Examples
    $ daegr gatsbyjs/gastby my-gatsby
    $ daegr kartiknair/dhow .
```

### Credit:

This is basically directly yoinked from [create-next-app's source code](https://github.com/vercel/next.js/blob/canary/packages/create-next-app/helpers/examples.ts#L71). Just needed an easy way to use in multiple projects without copy-pasting.
