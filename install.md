To install locally:
- clone repo
- install rbenv to work with ruby: ```brew install rbenv```
- add rbenv to shell ```rbenv init```
- install ruby using rbenv ```rbenv install #.#.#```
- set up rbenv globally ```rbenv global #.#.#```
- install bundler ```gem install bundler```
- follow steps from original repo (note it's switched to docker):
  - bundle install
  - bundle exec jekyll serve