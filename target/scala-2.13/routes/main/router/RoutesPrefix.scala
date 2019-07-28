// @GENERATOR:play-routes-compiler
// @SOURCE:/home/hsjsjsj009/Desktop/seapay/conf/routes
// @DATE:Sun Jul 28 15:15:24 WIB 2019


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
