// @GENERATOR:play-routes-compiler
// @SOURCE:/home/andraantariksa/Projects/SEAPay/conf/routes
// @DATE:Mon Jul 29 20:24:44 WIB 2019

package controllers;

import router.RoutesPrefix;

public class routes {
  
  public static final controllers.ReverseFrontendController FrontendController = new controllers.ReverseFrontendController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseAssets Assets = new controllers.ReverseAssets(RoutesPrefix.byNamePrefix());

  public static class javascript {
    
    public static final controllers.javascript.ReverseFrontendController FrontendController = new controllers.javascript.ReverseFrontendController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseAssets Assets = new controllers.javascript.ReverseAssets(RoutesPrefix.byNamePrefix());
  }

}
