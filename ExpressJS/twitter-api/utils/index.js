

module.exports = {
  parseError
}

function parseError(err) {

  return err.errors ? Object.values(err.errors).map(e => e.message) : err
}