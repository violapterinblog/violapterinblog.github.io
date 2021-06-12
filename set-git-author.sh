#!/usr/bin/env bash

# # http://stackoverflow.com/a/750191
# # After that, it might be necessary to `git push --force`.

git filter-branch -f --env-filter "
    GIT_AUTHOR_NAME='Phoenix Feder'
    GIT_AUTHOR_EMAIL='lo.verba.pe.le.munje@gmail.com'
    GIT_COMMITTER_NAME='Phoenix Feder'
    GIT_COMMITTER_EMAIL='lo.verba.pe.le.munje@gmail.com'
  " HEAD
