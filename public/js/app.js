var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
function $JSCompiler_returnArg$$($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
}
var $JSCompiler_prototypeAlias$$, $tuna$IS_IE$$ = !!eval("'\v' == 'v'");
function $tuna$utils$extend$$($Class$$, $Parent$$) {
  function $Link$$() {
  }
  $Link$$.prototype = $Parent$$.prototype;
  $Class$$.prototype = new $Link$$;
  $Class$$.prototype.constructor = $Class$$
}
function $tuna$utils$bind$$($func$$3$$, $context$$) {
  if($func$$3$$.bind !== $JSCompiler_alias_VOID$$) {
    return $func$$3$$.bind($context$$)
  }
  var $args$$ = Array.prototype.slice.call(arguments, 2);
  return function() {
    return $func$$3$$.apply($context$$, $args$$.concat(Array.prototype.slice.call(arguments)))
  }
}
function $tuna$utils$indexOf$$($element$$7$$, $array$$10$$) {
  if($array$$10$$.indexOf !== $JSCompiler_alias_VOID$$) {
    return $array$$10$$.indexOf($element$$7$$)
  }
  for(var $i$$1$$ = 0, $l$$ = $array$$10$$.length;$i$$1$$ < $l$$;) {
    if($array$$10$$[$i$$1$$] === $element$$7$$) {
      return $i$$1$$
    }
    $i$$1$$++
  }
  return-1
}
;function $tuna$dom$select$$($selector$$, $opt_context$$5$$) {
  return $tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$($selector$$, $opt_context$$5$$) : []
}
function $tuna$dom$selectOne$$($selector$$1$$, $opt_context$$6$$) {
  if($tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$) {
    var $result$$3$$ = $tuna$dom$__selectorEngine$$($selector$$1$$, $opt_context$$6$$);
    if(0 < $result$$3$$.length) {
      return $result$$3$$[0]
    }
  }
  return $JSCompiler_alias_NULL$$
}
function $tuna$dom$matchesSelector$$($element$$8$$, $selector$$3$$) {
  return $tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$.matchesSelector($element$$8$$, $selector$$3$$) : $JSCompiler_alias_FALSE$$
}
var $tuna$dom$__selectorEngine$$ = $JSCompiler_alias_NULL$$;
function $tuna$dom$addEventListener$$($element$$10$$, $listenerId_type$$48$$, $handler$$3$$) {
  if($element$$10$$.addEventListener !== $JSCompiler_alias_VOID$$) {
    $element$$10$$.addEventListener($listenerId_type$$48$$, $handler$$3$$, $JSCompiler_alias_FALSE$$)
  }else {
    if($element$$10$$.attachEvent !== $JSCompiler_alias_VOID$$) {
      var $eventName$$1$$ = "on" + $listenerId_type$$48$$;
      $element$$10$$[$eventName$$1$$] === $JSCompiler_alias_VOID$$ ? $tuna$dom$__addCustomIEListener$$($element$$10$$, $listenerId_type$$48$$, $handler$$3$$) : ($element$$10$$.$__ieTargetId$ === $JSCompiler_alias_VOID$$ && ($element$$10$$.$__ieTargetId$ = "element_" + $tuna$dom$__lastElementId$$++), $listenerId_type$$48$$ = $element$$10$$.$__ieTargetId$ + "_" + $listenerId_type$$48$$, $handler$$3$$[$listenerId_type$$48$$] = function $$handler$$3$$$$listenerId_type$$48$$$($event$$4$$) {
        $handler$$3$$.call($element$$10$$, $event$$4$$)
      }, $element$$10$$.attachEvent($eventName$$1$$, $handler$$3$$[$listenerId_type$$48$$]))
    }
  }
}
function $tuna$dom$addOneEventListener$$($handler$$5$$) {
  var $element$$12$$ = document.body;
  $element$$12$$.$__onceTargetId$ === $JSCompiler_alias_VOID$$ && ($element$$12$$.$__onceTargetId$ = "element_" + $tuna$dom$__lastElementId$$++);
  var $listenerId$$2$$ = $element$$12$$.$__onceTargetId$ + "_click";
  $handler$$5$$[$listenerId$$2$$] = function $$handler$$5$$$$listenerId$$2$$$($event$$5_listenerId$$inline_22$$) {
    $handler$$5$$.call($element$$12$$, $event$$5_listenerId$$inline_22$$);
    $event$$5_listenerId$$inline_22$$ = $element$$12$$.$__onceTargetId$ + "_click";
    if($handler$$5$$[$event$$5_listenerId$$inline_22$$] !== $JSCompiler_alias_VOID$$) {
      var $handler$$inline_356$$ = $handler$$5$$[$event$$5_listenerId$$inline_22$$];
      if($element$$12$$.removeEventListener !== $JSCompiler_alias_VOID$$) {
        $element$$12$$.removeEventListener("click", $handler$$inline_356$$, $JSCompiler_alias_FALSE$$)
      }else {
        if($element$$12$$.detachEvent !== $JSCompiler_alias_VOID$$) {
          if($element$$12$$.onclick === $JSCompiler_alias_VOID$$) {
            var $handlers$$inline_357_listenerId$$inline_359$$ = $element$$12$$.__click;
            if($handlers$$inline_357_listenerId$$inline_359$$ !== $JSCompiler_alias_VOID$$) {
              for(var $i$$inline_358$$ = $handlers$$inline_357_listenerId$$inline_359$$.length - 1;0 <= $i$$inline_358$$;) {
                $handlers$$inline_357_listenerId$$inline_359$$[$i$$inline_358$$] === $handler$$inline_356$$ && $handlers$$inline_357_listenerId$$inline_359$$.splice($i$$inline_358$$, 1), $i$$inline_358$$--
              }
            }
          }else {
            $handlers$$inline_357_listenerId$$inline_359$$ = $element$$12$$.$__ieTargetId$ + "_click", $handler$$inline_356$$[$handlers$$inline_357_listenerId$$inline_359$$] !== $JSCompiler_alias_VOID$$ && ($element$$12$$.detachEvent("onclick", $handler$$inline_356$$[$handlers$$inline_357_listenerId$$inline_359$$]), delete $handler$$inline_356$$[$handlers$$inline_357_listenerId$$inline_359$$])
          }
        }
      }
      delete $handler$$5$$[$event$$5_listenerId$$inline_22$$]
    }
  };
  $tuna$dom$addEventListener$$($element$$12$$, "click", $handler$$5$$[$listenerId$$2$$])
}
function $tuna$dom$addChildEventListener$$($element$$14$$, $selector$$4$$, $type$$52$$, $handler$$7$$) {
  $element$$14$$.$__childTargetId$ === $JSCompiler_alias_VOID$$ && ($element$$14$$.$__childTargetId$ = "element_" + $tuna$dom$__lastElementId$$++);
  var $listenerId$$4$$ = $element$$14$$.$__childTargetId$ + "_" + $type$$52$$ + "_" + $selector$$4$$;
  $handler$$7$$[$listenerId$$4$$] = function $$handler$$7$$$$listenerId$$4$$$($event$$6$$) {
    var $target$$36$$ = $event$$6$$.target || $event$$6$$.srcElement, $child$$1$$ = $JSCompiler_alias_NULL$$, $child$$1$$ = 0 === ($tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$.matches($selector$$4$$, [$target$$36$$]) : []).length ? $tuna$dom$getParentMatches$$($target$$36$$, $selector$$4$$, $element$$14$$) : $target$$36$$;
    $child$$1$$ !== $JSCompiler_alias_NULL$$ && $handler$$7$$.call($child$$1$$, $event$$6$$)
  };
  $tuna$dom$addEventListener$$($element$$14$$, $type$$52$$, $handler$$7$$[$listenerId$$4$$])
}
function $tuna$dom$__addCustomIEListener$$($element$$16$$, $type$$54$$, $handler$$9$$) {
  $element$$16$$.$__customListener$ === $JSCompiler_alias_VOID$$ && ($element$$16$$.$__customListener$ = function $$element$$16$$$$__customListener$$($event$$7$$) {
    if($event$$7$$.$__type$ !== $JSCompiler_alias_VOID$$) {
      var $handlers_type$$55$$ = $event$$7$$.$__type$;
      delete $event$$7$$.$__type$;
      var $handlers_type$$55$$ = $element$$16$$["__" + $handlers_type$$55$$], $i$$3$$;
      for($i$$3$$ in $handlers_type$$55$$) {
        $handlers_type$$55$$[$i$$3$$].call($element$$16$$, $event$$7$$)
      }
    }
  }, $element$$16$$.attachEvent("onhelp", $element$$16$$.$__customListener$));
  $element$$16$$["__" + $type$$54$$] === $JSCompiler_alias_VOID$$ && ($element$$16$$["__" + $type$$54$$] = []);
  $element$$16$$["__" + $type$$54$$].push($handler$$9$$)
}
var $tuna$dom$__lastElementId$$ = 0;
function $tuna$dom$preventDefault$$($event$$9$$) {
  $event$$9$$.preventDefault !== $JSCompiler_alias_VOID$$ ? $event$$9$$.preventDefault() : $event$$9$$.returnValue = $JSCompiler_alias_FALSE$$
}
function $tuna$dom$stopPropagation$$($event$$10$$) {
  $event$$10$$.stopPropagation !== $JSCompiler_alias_VOID$$ ? $event$$10$$.stopPropagation() : $event$$10$$.cancelBubble = $JSCompiler_alias_TRUE$$
}
function $tuna$dom$getParentMatches$$($element$$19_parent$$2$$, $selector$$6$$, $opt_context$$7$$) {
  for($element$$19_parent$$2$$ = $element$$19_parent$$2$$.parentNode;$element$$19_parent$$2$$ !== $JSCompiler_alias_NULL$$ && $element$$19_parent$$2$$ !== $opt_context$$7$$ && !$tuna$dom$matchesSelector$$($element$$19_parent$$2$$, $selector$$6$$);) {
    $element$$19_parent$$2$$ = $element$$19_parent$$2$$.parentNode
  }
  return $element$$19_parent$$2$$ === $opt_context$$7$$ ? $JSCompiler_alias_NULL$$ : $element$$19_parent$$2$$
}
function $tuna$dom$hasClass$$($element$$21$$, $className$$2$$) {
  return $element$$21$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$21$$.classList.contains($className$$2$$) : $element$$21$$.className !== $JSCompiler_alias_VOID$$ ? $element$$21$$.className.match(RegExp("(\\s|^)" + $className$$2$$ + "(\\s|$)")) !== $JSCompiler_alias_NULL$$ : $JSCompiler_alias_FALSE$$
}
function $tuna$dom$addClass$$($element$$22$$, $className$$3$$) {
  $element$$22$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$22$$.classList.add($className$$3$$) : $tuna$dom$hasClass$$($element$$22$$, $className$$3$$) || ($element$$22$$.className += " " + $className$$3$$)
}
function $tuna$dom$removeClass$$($element$$23$$, $className$$4$$) {
  $element$$23$$.classList !== $JSCompiler_alias_VOID$$ ? $element$$23$$.classList.remove($className$$4$$) : $tuna$dom$hasClass$$($element$$23$$, $className$$4$$) && ($element$$23$$.className = $element$$23$$.className.replace(RegExp("(\\s|^)" + $className$$4$$ + "(\\s|$)"), " "))
}
function $tuna$dom$setClassExist$$($element$$24$$, $className$$5$$, $isExist$$) {
  !$isExist$$ && $tuna$dom$hasClass$$($element$$24$$, $className$$5$$) ? $tuna$dom$removeClass$$($element$$24$$, $className$$5$$) : $isExist$$ && !$tuna$dom$hasClass$$($element$$24$$, $className$$5$$) && $tuna$dom$addClass$$($element$$24$$, $className$$5$$)
}
;function $tuna$events$BasicEvent$$($target$$37$$, $type$$58$$, $opt_isBubbling$$) {
  this.$_target$ = $target$$37$$;
  this.$_type$ = $type$$58$$;
  this.$_isBubbling$ = !!$opt_isBubbling$$;
  this.$_isImmediateStopped$ = this.$_isStopped$ = this.$_isCanceled$ = $JSCompiler_alias_FALSE$$
}
$tuna$events$BasicEvent$$.prototype.$getTarget$ = $JSCompiler_get$$("$_target$");
$tuna$events$BasicEvent$$.prototype.$getType$ = $JSCompiler_get$$("$_type$");
$tuna$events$BasicEvent$$.prototype.preventDefault = function $$tuna$events$BasicEvent$$$$preventDefault$() {
  this.$_isCanceled$ = $JSCompiler_alias_TRUE$$
};
$tuna$events$BasicEvent$$.prototype.stopPropagation = function $$tuna$events$BasicEvent$$$$stopPropagation$() {
  this.$_isStopped$ = $JSCompiler_alias_TRUE$$
};
function $tuna$events$IEventDispatcher$$() {
}
$tuna$events$IEventDispatcher$$.prototype.$dispatch$ = $JSCompiler_emptyFn$$();
$tuna$events$IEventDispatcher$$.prototype.addEventListener = $JSCompiler_emptyFn$$();
$tuna$events$IEventDispatcher$$.prototype.removeEventListener = $JSCompiler_emptyFn$$();
$tuna$events$IEventDispatcher$$.prototype.$hasEventListener$ = $JSCompiler_emptyFn$$();
function $tuna$events$EventDispatcher$$($opt_propagationParent$$) {
  this.$_propagationParent$ = $opt_propagationParent$$ || $JSCompiler_alias_NULL$$;
  this.$_listeners$ = {}
}
$tuna$events$EventDispatcher$$.prototype.$dispatch$ = function $$tuna$events$EventDispatcher$$$$$dispatch$$($event$$12$$, $opt_data$$3$$) {
  $event$$12$$ instanceof $tuna$events$BasicEvent$$ || ($event$$12$$ = new $tuna$events$BasicEvent$$(this, $event$$12$$));
  var $data$$20$$ = $opt_data$$3$$ !== $JSCompiler_alias_VOID$$ ? $opt_data$$3$$ : $JSCompiler_alias_NULL$$, $type$$62$$ = $event$$12$$.$getType$();
  if(this.$_listeners$[$type$$62$$] !== $JSCompiler_alias_VOID$$) {
    for(var $i$$7$$ = 0, $l$$4$$ = this.$_listeners$[$type$$62$$].length;$i$$7$$ < $l$$4$$;) {
      this.$_listeners$[$type$$62$$][$i$$7$$].call(this, $event$$12$$, $data$$20$$);
      if($event$$12$$.$_isImmediateStopped$) {
        break
      }
      $i$$7$$++
    }
    this.$_propagationParent$ !== $JSCompiler_alias_NULL$$ && $event$$12$$.$_isBubbling$ && !$event$$12$$.$_isImmediateStopped$ && !$event$$12$$.$_isStopped$ && this.$_propagationParent$.$dispatch$($event$$12$$)
  }
  return!$event$$12$$.$_isCanceled$
};
$tuna$events$EventDispatcher$$.prototype.addEventListener = function $$tuna$events$EventDispatcher$$$$addEventListener$($type$$63$$, $listener$$29$$) {
  this.$_listeners$[$type$$63$$] === $JSCompiler_alias_VOID$$ ? this.$_listeners$[$type$$63$$] = [$listener$$29$$] : this.$hasEventListener$($type$$63$$, $listener$$29$$) || this.$_listeners$[$type$$63$$].push($listener$$29$$)
};
$tuna$events$EventDispatcher$$.prototype.removeEventListener = function $$tuna$events$EventDispatcher$$$$removeEventListener$($type$$64$$, $listener$$30$$) {
  if(this.$_listeners$[$type$$64$$] !== $JSCompiler_alias_VOID$$) {
    var $listenerIndex$$ = $tuna$utils$indexOf$$($listener$$30$$, this.$_listeners$[$type$$64$$]);
    -1 !== $listenerIndex$$ && this.$_listeners$[$type$$64$$].splice($listenerIndex$$, 1)
  }
};
$tuna$events$EventDispatcher$$.prototype.$hasEventListener$ = function $$tuna$events$EventDispatcher$$$$$hasEventListener$$($type$$65$$, $listener$$31$$) {
  return this.$_listeners$[$type$$65$$] !== $JSCompiler_alias_VOID$$ ? -1 !== $tuna$utils$indexOf$$($listener$$31$$, this.$_listeners$[$type$$65$$]) : $JSCompiler_alias_FALSE$$
};
$tuna$utils$extend$$($JSCompiler_emptyFn$$(), $tuna$events$IEventDispatcher$$);
$tuna$utils$extend$$(function() {
  $tuna$events$EventDispatcher$$.call(this);
  this.$__data$ = $JSCompiler_alias_NULL$$
}, $tuna$events$EventDispatcher$$);
function $tuna$model$ListResource$$() {
  $tuna$events$EventDispatcher$$.call(this);
  this.$_list$ = []
}
$tuna$utils$extend$$($tuna$model$ListResource$$, $tuna$events$EventDispatcher$$);
$tuna$model$ListResource$$.prototype.set = function $$tuna$model$ListResource$$$$set$($list$$1$$) {
  this.$_list$ !== $list$$1$$ && (this.$_list$ = $list$$1$$, this.$dispatch$("update", this.$_list$))
};
$tuna$model$ListResource$$.prototype.clear = function $$tuna$model$ListResource$$$$clear$() {
  0 < this.$_list$.length && (this.$_list$.length = 0, this.$dispatch$("update", this.$_list$))
};
$tuna$model$ListResource$$.prototype.$addItem$ = function $$tuna$model$ListResource$$$$$addItem$$($record$$) {
  for(var $i$$9$$ = 0, $l$$6$$ = this.$_list$.length;$i$$9$$ < $l$$6$$ && !(this.$_list$[$i$$9$$].id === $record$$.id);) {
    $i$$9$$++
  }
  this.$_list$[$i$$9$$] = $record$$;
  this.$dispatch$("update", this.$_list$)
};
function $tuna$model$ItemResource$$() {
  $tuna$events$EventDispatcher$$.call(this);
  this.$_item$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$model$ItemResource$$, $tuna$events$EventDispatcher$$);
$tuna$model$ItemResource$$.prototype.set = function $$tuna$model$ItemResource$$$$set$($item$$1$$) {
  this.$_item$ !== $item$$1$$ && (this.$_item$ = $item$$1$$, this.$dispatch$("update", this.$_item$))
};
$tuna$model$ItemResource$$.prototype.clear = function $$tuna$model$ItemResource$$$$clear$() {
  this.set($JSCompiler_alias_NULL$$)
};
var $tuna$model$recordFactory$$ = new function() {
  this.$__prototypes$ = {}
};
function $tuna$rest$Method$$() {
  $tuna$events$EventDispatcher$$.call(this)
}
$tuna$utils$extend$$($tuna$rest$Method$$, $tuna$events$EventDispatcher$$);
$tuna$rest$Method$$.prototype.call = $JSCompiler_emptyFn$$();
$tuna$rest$Method$$.prototype.$clone$ = function $$tuna$rest$Method$$$$$clone$$() {
  return new this.constructor
};
$tuna$utils$extend$$(function() {
  $tuna$events$EventDispatcher$$.call(this)
}, $tuna$rest$Method$$);
function $tuna$tmpl$data$DataNode$$($value$$42$$, $opt_parent$$, $opt_key$$1$$) {
  this.$__value$ = $value$$42$$;
  this.$__parent$ = $opt_parent$$ || $tuna$tmpl$data$NULL_NODE$$;
  this.$__key$ = $opt_key$$1$$ || $JSCompiler_alias_NULL$$;
  this.$__keyNode$ = $JSCompiler_alias_NULL$$;
  this.$__children$ = {}
}
$JSCompiler_prototypeAlias$$ = $tuna$tmpl$data$DataNode$$.prototype;
$JSCompiler_prototypeAlias$$.getParent = $JSCompiler_get$$("$__parent$");
$JSCompiler_prototypeAlias$$.getKey = function $$JSCompiler_prototypeAlias$$$getKey$() {
  this.$__keyNode$ === $JSCompiler_alias_NULL$$ && (this.$__keyNode$ = new $tuna$tmpl$data$DataNode$$(this.$__key$));
  return this.$__keyNode$
};
$JSCompiler_prototypeAlias$$.$getRoot$ = function $$JSCompiler_prototypeAlias$$$$getRoot$$() {
  return this.$__parent$ !== $tuna$tmpl$data$NULL_NODE$$ ? this.$__parent$.$getRoot$() : this
};
$JSCompiler_prototypeAlias$$.$getValue$ = $JSCompiler_get$$("$__value$");
$JSCompiler_prototypeAlias$$.getStringValue = function $$JSCompiler_prototypeAlias$$$getStringValue$() {
  return this.$__value$ !== $JSCompiler_alias_NULL$$ ? this.$__value$.toString() : $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_growChild$$($JSCompiler_StaticMethods_growChild$self$$, $key$$16$$) {
  if($JSCompiler_StaticMethods_growChild$self$$ === $tuna$tmpl$data$NULL_NODE$$) {
    return $JSCompiler_StaticMethods_growChild$self$$
  }
  $JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$16$$] === $JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$16$$] = $JSCompiler_StaticMethods_growChild$self$$.$__value$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_growChild$self$$.$__value$[$key$$16$$] !== $JSCompiler_alias_VOID$$ ? new $tuna$tmpl$data$DataNode$$($JSCompiler_StaticMethods_growChild$self$$.$__value$[$key$$16$$], $JSCompiler_StaticMethods_growChild$self$$, $key$$16$$) : 
  $tuna$tmpl$data$NULL_NODE$$);
  return $JSCompiler_StaticMethods_growChild$self$$.$__children$[$key$$16$$]
}
var $tuna$tmpl$data$NULL_NODE$$ = new $tuna$tmpl$data$DataNode$$($JSCompiler_alias_NULL$$);
function $tuna$tmpl$data$PathEvaluator$$() {
  this.$__parsedPath$ = $JSCompiler_alias_NULL$$
}
$tuna$tmpl$data$PathEvaluator$$.prototype.$setPath$ = function $$tuna$tmpl$data$PathEvaluator$$$$$setPath$$($path$$4$$) {
  this.$__parsedPath$ = $path$$4$$.split("/")
};
$tuna$tmpl$data$PathEvaluator$$.prototype.evaluate = function $$tuna$tmpl$data$PathEvaluator$$$$evaluate$($dataNode$$) {
  return this.$__parsedPath$ !== $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods___applyNextToken$$(this, this.$__parsedPath$, $dataNode$$, 0) : $tuna$tmpl$data$NULL_NODE$$
};
function $JSCompiler_StaticMethods___applyNextToken$$($JSCompiler_StaticMethods___applyNextToken$self$$, $path$$5$$, $dataNode$$1$$, $index$$51$$) {
  var $token$$4$$ = $path$$5$$[$index$$51$$];
  return $token$$4$$ !== $JSCompiler_alias_VOID$$ && $dataNode$$1$$ !== $tuna$tmpl$data$NULL_NODE$$ ? $JSCompiler_StaticMethods___applyNextToken$$($JSCompiler_StaticMethods___applyNextToken$self$$, $path$$5$$, $JSCompiler_StaticMethods___applyToken$$($token$$4$$, $dataNode$$1$$), ++$index$$51$$) : $dataNode$$1$$
}
function $JSCompiler_StaticMethods___applyToken$$($token$$5$$, $dataNode$$2$$) {
  switch($token$$5$$) {
    case "":
      return $dataNode$$2$$.$getRoot$();
    case ".":
      return $dataNode$$2$$;
    case "..":
      return $dataNode$$2$$.getParent();
    case "$key":
      return $dataNode$$2$$.getKey()
  }
  return $JSCompiler_StaticMethods_growChild$$($dataNode$$2$$, $token$$5$$)
}
;function $tuna$tmpl$settings$SpotSettings$$($targetSelector$$, $dataPath$$) {
  this.$targetSelector$ = $targetSelector$$;
  this.$dataPath$ = $dataPath$$;
  this.pattern = $JSCompiler_alias_NULL$$
}
$tuna$tmpl$settings$SpotSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("spot");
function $tuna$tmpl$settings$AttributeSettings$$($targetSelector$$1$$, $dataPath$$1$$, $attributeName$$) {
  $tuna$tmpl$settings$SpotSettings$$.call(this, $targetSelector$$1$$, $dataPath$$1$$);
  this.$attributeName$ = $attributeName$$;
  this.$hasEvent$ = $JSCompiler_alias_FALSE$$
}
$tuna$utils$extend$$($tuna$tmpl$settings$AttributeSettings$$, $tuna$tmpl$settings$SpotSettings$$);
$tuna$tmpl$settings$AttributeSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("attribute");
function $tuna$tmpl$settings$ConditionSettings$$($targetSelector$$2$$, $dataPath$$2$$, $actionType$$, $operatorType$$) {
  $tuna$tmpl$settings$SpotSettings$$.call(this, $targetSelector$$2$$, $dataPath$$2$$);
  this.$actionType$ = $actionType$$;
  this.$operatorType$ = $operatorType$$;
  this.$operatorData$ = this.$actionData$ = ""
}
$tuna$utils$extend$$($tuna$tmpl$settings$ConditionSettings$$, $tuna$tmpl$settings$SpotSettings$$);
$tuna$tmpl$settings$ConditionSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("condition");
function $tuna$tmpl$settings$CheckboxSettings$$($targetSelector$$3$$, $dataPath$$3$$) {
  $tuna$tmpl$settings$SpotSettings$$.call(this, $targetSelector$$3$$, $dataPath$$3$$)
}
$tuna$utils$extend$$($tuna$tmpl$settings$CheckboxSettings$$, $tuna$tmpl$settings$SpotSettings$$);
$tuna$tmpl$settings$CheckboxSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("checkbox");
function $tuna$tmpl$settings$ListSettings$$($targetSelector$$4$$, $dataPath$$4$$, $keyPath$$1$$, $itemRendererID$$, $itemSettings$$) {
  $tuna$tmpl$settings$SpotSettings$$.call(this, $targetSelector$$4$$, $dataPath$$4$$);
  this.keyPath = $keyPath$$1$$;
  this.$itemRendererID$ = $itemRendererID$$;
  this.$itemSettings$ = $itemSettings$$
}
$tuna$utils$extend$$($tuna$tmpl$settings$ListSettings$$, $tuna$tmpl$settings$SpotSettings$$);
$tuna$tmpl$settings$ListSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("list");
function $tuna$tmpl$settings$TemplateSettings$$() {
  this.$__items$ = []
}
$tuna$tmpl$settings$TemplateSettings$$.prototype.$getItemsCount$ = function $$tuna$tmpl$settings$TemplateSettings$$$$$getItemsCount$$() {
  return this.$__items$.length
};
$tuna$tmpl$settings$TemplateSettings$$.prototype.$getItemAt$ = function $$tuna$tmpl$settings$TemplateSettings$$$$$getItemAt$$($index$$52$$) {
  return this.$__items$[$index$$52$$]
};
$tuna$tmpl$settings$TemplateSettings$$.prototype.$getType$ = $JSCompiler_returnArg$$("template");
function $tuna$tmpl$markup$SpotExtractor$$() {
  this.$_tagName$ = "spot";
  this.$_ns$ = "tuna:"
}
$tuna$tmpl$markup$SpotExtractor$$.prototype.$_createItem$ = function $$tuna$tmpl$markup$SpotExtractor$$$$$_createItem$$($element$$28$$) {
  var $selector$$7_spot$$ = $element$$28$$.getAttribute(this.$_ns$ + "target"), $dataPath$$5$$ = $element$$28$$.getAttribute(this.$_ns$ + "path");
  return $selector$$7_spot$$ !== $JSCompiler_alias_NULL$$ && $dataPath$$5$$ !== $JSCompiler_alias_NULL$$ ? ($selector$$7_spot$$ = new $tuna$tmpl$settings$SpotSettings$$($selector$$7_spot$$, $dataPath$$5$$), $selector$$7_spot$$.pattern = $element$$28$$.getAttribute(this.$_ns$ + "pattern"), $selector$$7_spot$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$markup$ListExtractor$$($templateBuilder$$) {
  $tuna$tmpl$markup$SpotExtractor$$.call(this);
  this.$_tagName$ = "list";
  this.$__templateBuilder$ = $templateBuilder$$
}
$tuna$utils$extend$$($tuna$tmpl$markup$ListExtractor$$, $tuna$tmpl$markup$SpotExtractor$$);
$tuna$tmpl$markup$ListExtractor$$.prototype.$_createItem$ = function $$tuna$tmpl$markup$ListExtractor$$$$$_createItem$$($element$$29$$) {
  var $list$$2_selector$$8$$ = $element$$29$$.getAttribute(this.$_ns$ + "target"), $dataPath$$6$$ = $element$$29$$.getAttribute(this.$_ns$ + "path"), $keyPath$$2$$ = $element$$29$$.getAttribute(this.$_ns$ + "key-path"), $itemRendererID$$1$$ = $element$$29$$.getAttribute(this.$_ns$ + "item-renderer-id"), $itemSettings$$1$$ = $JSCompiler_alias_NULL$$, $templateID$$ = $element$$29$$.getAttribute(this.$_ns$ + "item-template-id");
  $templateID$$ !== $JSCompiler_alias_NULL$$ && ($itemSettings$$1$$ = $JSCompiler_StaticMethods_buildSettings$$(this.$__templateBuilder$, $templateID$$));
  return $list$$2_selector$$8$$ !== $JSCompiler_alias_NULL$$ && $dataPath$$6$$ !== $JSCompiler_alias_NULL$$ && $keyPath$$2$$ !== $JSCompiler_alias_NULL$$ && $itemRendererID$$1$$ !== $JSCompiler_alias_NULL$$ && $itemSettings$$1$$ !== $JSCompiler_alias_NULL$$ ? ($list$$2_selector$$8$$ = new $tuna$tmpl$settings$ListSettings$$($list$$2_selector$$8$$, $dataPath$$6$$, $keyPath$$2$$, $itemRendererID$$1$$, $itemSettings$$1$$), $list$$2_selector$$8$$.pattern = $element$$29$$.getAttribute(this.$_ns$ + "pattern"), 
  $list$$2_selector$$8$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$markup$AttributeExtractor$$() {
  $tuna$tmpl$markup$SpotExtractor$$.call(this);
  this.$_tagName$ = "attr"
}
$tuna$utils$extend$$($tuna$tmpl$markup$AttributeExtractor$$, $tuna$tmpl$markup$SpotExtractor$$);
$tuna$tmpl$markup$AttributeExtractor$$.prototype.$_createItem$ = function $$tuna$tmpl$markup$AttributeExtractor$$$$$_createItem$$($element$$30$$) {
  var $attribute$$2_selector$$9$$ = $element$$30$$.getAttribute(this.$_ns$ + "target"), $dataPath$$7$$ = $element$$30$$.getAttribute(this.$_ns$ + "path"), $attributeName$$1$$ = $element$$30$$.getAttribute(this.$_ns$ + "name");
  return $attribute$$2_selector$$9$$ !== $JSCompiler_alias_NULL$$ && $dataPath$$7$$ !== $JSCompiler_alias_NULL$$ && $attributeName$$1$$ !== $JSCompiler_alias_NULL$$ ? ($attribute$$2_selector$$9$$ = new $tuna$tmpl$settings$AttributeSettings$$($attribute$$2_selector$$9$$, $dataPath$$7$$, $attributeName$$1$$), $attribute$$2_selector$$9$$.pattern = $element$$30$$.getAttribute(this.$_ns$ + "pattern"), $attribute$$2_selector$$9$$.$hasEvent$ = !!$element$$30$$.getAttribute(this.$_ns$ + "event"), $attribute$$2_selector$$9$$) : 
  $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$markup$ConditionExtractor$$() {
  $tuna$tmpl$markup$SpotExtractor$$.call(this);
  this.$_tagName$ = "if";
  this.$__operators$ = [];
  this.$__actions$ = []
}
$tuna$utils$extend$$($tuna$tmpl$markup$ConditionExtractor$$, $tuna$tmpl$markup$SpotExtractor$$);
$tuna$tmpl$markup$ConditionExtractor$$.prototype.$_createItem$ = function $$tuna$tmpl$markup$ConditionExtractor$$$$$_createItem$$($element$$31$$) {
  var $condition$$1_selector$$10$$ = $element$$31$$.getAttribute(this.$_ns$ + "target"), $dataPath$$8$$ = $element$$31$$.getAttribute(this.$_ns$ + "path"), $actionAttribute_name$$inline_27$$;
  a: {
    $actionAttribute_name$$inline_27$$ = $JSCompiler_alias_NULL$$;
    for(var $key$$inline_28_name$$inline_32$$ in this.$__actions$) {
      if($actionAttribute_name$$inline_27$$ = this.$_ns$ + this.$__actions$[$key$$inline_28_name$$inline_32$$], $element$$31$$.attributes[$actionAttribute_name$$inline_27$$]) {
        $actionAttribute_name$$inline_27$$ = $element$$31$$.attributes[$actionAttribute_name$$inline_27$$];
        break a
      }
    }
    $actionAttribute_name$$inline_27$$ = $JSCompiler_alias_NULL$$
  }
  var $key$$inline_33_operatorAttribute$$;
  a: {
    $key$$inline_28_name$$inline_32$$ = $JSCompiler_alias_NULL$$;
    for($key$$inline_33_operatorAttribute$$ in this.$__operators$) {
      if($key$$inline_28_name$$inline_32$$ = this.$_ns$ + this.$__operators$[$key$$inline_33_operatorAttribute$$], $element$$31$$.attributes[$key$$inline_28_name$$inline_32$$]) {
        $key$$inline_33_operatorAttribute$$ = $element$$31$$.attributes[$key$$inline_28_name$$inline_32$$];
        break a
      }
    }
    $key$$inline_33_operatorAttribute$$ = $JSCompiler_alias_NULL$$
  }
  return $condition$$1_selector$$10$$ !== $JSCompiler_alias_NULL$$ && $dataPath$$8$$ !== $JSCompiler_alias_NULL$$ && $actionAttribute_name$$inline_27$$ !== $JSCompiler_alias_NULL$$ && $key$$inline_33_operatorAttribute$$ !== $JSCompiler_alias_NULL$$ ? ($condition$$1_selector$$10$$ = new $tuna$tmpl$settings$ConditionSettings$$($condition$$1_selector$$10$$, $dataPath$$8$$, $actionAttribute_name$$inline_27$$.name.substr(this.$_ns$.length), $key$$inline_33_operatorAttribute$$.name.substr(this.$_ns$.length)), 
  $condition$$1_selector$$10$$.pattern = $element$$31$$.getAttribute(this.$_ns$ + "pattern"), $condition$$1_selector$$10$$.$actionData$ = $actionAttribute_name$$inline_27$$.value, $condition$$1_selector$$10$$.$operatorData$ = $key$$inline_33_operatorAttribute$$.value, $condition$$1_selector$$10$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$markup$CheckboxExtractor$$() {
  $tuna$tmpl$markup$SpotExtractor$$.call(this);
  this.$_tagName$ = "checkbox"
}
$tuna$utils$extend$$($tuna$tmpl$markup$CheckboxExtractor$$, $tuna$tmpl$markup$SpotExtractor$$);
$tuna$tmpl$markup$CheckboxExtractor$$.prototype.$_createItem$ = function $$tuna$tmpl$markup$CheckboxExtractor$$$$$_createItem$$($element$$34$$) {
  var $checkbox_selector$$11$$ = $element$$34$$.getAttribute(this.$_ns$ + "target"), $dataPath$$9$$ = $element$$34$$.getAttribute(this.$_ns$ + "path");
  return $checkbox_selector$$11$$ !== $JSCompiler_alias_NULL$$ && $dataPath$$9$$ !== $JSCompiler_alias_NULL$$ ? ($checkbox_selector$$11$$ = new $tuna$tmpl$settings$CheckboxSettings$$($checkbox_selector$$11$$, $dataPath$$9$$), $checkbox_selector$$11$$.pattern = $element$$34$$.getAttribute(this.$_ns$ + "pattern"), $checkbox_selector$$11$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$markup$MarkupTemplateBuilder$$() {
  this.$__templatesTable$ = {};
  this.$__extractors$ = []
}
function $JSCompiler_StaticMethods_addExtractor$$($extractor$$) {
  $tuna$tmpl$__markupBuilder$$.$__extractors$.push($extractor$$)
}
function $JSCompiler_StaticMethods_buildSettings$$($JSCompiler_StaticMethods_buildSettings$self$$, $templateID$$1$$) {
  if($JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$] === $JSCompiler_alias_VOID$$) {
    var $element$$35$$ = document.getElementById($templateID$$1$$);
    if($element$$35$$ !== $JSCompiler_alias_NULL$$) {
      for(var $template$$ = new $tuna$tmpl$settings$TemplateSettings$$, $i$$19$$ = 0, $l$$16$$ = $JSCompiler_StaticMethods_buildSettings$self$$.$__extractors$.length, $JSCompiler_StaticMethods_extract$self$$inline_35_items$$1$$ = $JSCompiler_alias_NULL$$;$i$$19$$ < $l$$16$$;) {
        for(var $JSCompiler_StaticMethods_extract$self$$inline_35_items$$1$$ = $JSCompiler_StaticMethods_buildSettings$self$$.$__extractors$[$i$$19$$], $result$$inline_37$$ = [], $elements$$inline_38$$ = $element$$35$$.getElementsByTagName($tuna$IS_IE$$ ? $JSCompiler_StaticMethods_extract$self$$inline_35_items$$1$$.$_tagName$ : $JSCompiler_StaticMethods_extract$self$$inline_35_items$$1$$.$_ns$ + $JSCompiler_StaticMethods_extract$self$$inline_35_items$$1$$.$_tagName$), $i$$inline_39$$ = 0, $l$$inline_40$$ = 
        $elements$$inline_38$$.length, $item$$inline_41$$ = $JSCompiler_alias_NULL$$;$i$$inline_39$$ < $l$$inline_40$$;) {
          $item$$inline_41$$ = $JSCompiler_StaticMethods_extract$self$$inline_35_items$$1$$.$_createItem$($elements$$inline_38$$[$i$$inline_39$$]), $item$$inline_41$$ !== $JSCompiler_alias_NULL$$ && $result$$inline_37$$.push($item$$inline_41$$), $i$$inline_39$$++
        }
        $JSCompiler_StaticMethods_extract$self$$inline_35_items$$1$$ = $result$$inline_37$$;
        $JSCompiler_StaticMethods_extract$self$$inline_35_items$$1$$ !== $JSCompiler_alias_NULL$$ && ($template$$.$__items$ = $template$$.$__items$.concat($JSCompiler_StaticMethods_extract$self$$inline_35_items$$1$$));
        $i$$19$$++
      }
      $JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$] = $template$$
    }
  }
  return $JSCompiler_StaticMethods_buildSettings$self$$.$__templatesTable$[$templateID$$1$$] || $JSCompiler_alias_NULL$$
}
;function $tuna$tmpl$units$list$ListContainerRouter$$($container$$, $rootTemplate$$) {
  this.$_container$ = $container$$;
  this.$_rootTemplate$ = $rootTemplate$$
}
$tuna$tmpl$units$list$ListContainerRouter$$.prototype.append = function $$tuna$tmpl$units$list$ListContainerRouter$$$$append$($node$$2$$) {
  this.$_container$.appendChild($node$$2$$);
  var $JSCompiler_StaticMethods_registerChildCreation$self$$inline_46$$ = this.$_rootTemplate$;
  $JSCompiler_StaticMethods_registerChildCreation$self$$inline_46$$.$__createdChildren$ = $JSCompiler_StaticMethods_registerChildCreation$self$$inline_46$$.$__createdChildren$.concat($node$$2$$)
};
$tuna$tmpl$units$list$ListContainerRouter$$.prototype.remove = function $$tuna$tmpl$units$list$ListContainerRouter$$$$remove$($node$$3$$) {
  this.$_container$.removeChild($node$$3$$);
  var $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_49$$ = this.$_rootTemplate$;
  $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_49$$.$__removedChildren$ = $JSCompiler_StaticMethods_registerChildRemoval$self$$inline_49$$.$__removedChildren$.concat($node$$3$$)
};
function $tuna$tmpl$units$condition$ClassAction$$($opt_data$$6$$) {
  this.$_data$ = $opt_data$$6$$ || ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$ClassAction$$, $tuna$tmpl$units$condition$ConditionAction$$);
$tuna$tmpl$units$condition$ClassAction$$.prototype.apply = function $$tuna$tmpl$units$condition$ClassAction$$$$apply$($element$$38$$, $testResult$$) {
  "" !== this.$_data$ && $tuna$dom$setClassExist$$($element$$38$$, this.$_data$, $testResult$$)
};
function $tuna$tmpl$units$condition$ConditionAction$$($opt_data$$7$$) {
  this.$_data$ = $opt_data$$7$$ || ""
}
$tuna$tmpl$units$condition$ConditionAction$$.prototype.apply = $JSCompiler_emptyFn$$();
$tuna$tmpl$units$condition$ConditionAction$$.prototype.$clone$ = function $$tuna$tmpl$units$condition$ConditionAction$$$$$clone$$($data$$26$$) {
  return new this.constructor($data$$26$$)
};
function $tuna$tmpl$units$condition$ConditionOperator$$($opt_data$$8$$) {
  this.$_data$ = $opt_data$$8$$ || ""
}
$tuna$tmpl$units$condition$ConditionOperator$$.prototype.test = $JSCompiler_emptyFn$$();
$tuna$tmpl$units$condition$ConditionOperator$$.prototype.$clone$ = function $$tuna$tmpl$units$condition$ConditionOperator$$$$$clone$$($data$$27$$) {
  return new this.constructor($data$$27$$)
};
function $tuna$tmpl$units$condition$EqualsOperator$$($opt_data$$9$$) {
  this.$_data$ = $opt_data$$9$$ || ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$EqualsOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$EqualsOperator$$.prototype.test = function $$tuna$tmpl$units$condition$EqualsOperator$$$$test$($value$$46$$) {
  return $value$$46$$ === this.$_data$ || $value$$46$$ + "" === this.$_data$
};
function $tuna$tmpl$units$condition$IsSetOperator$$() {
  this.$_data$ = ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$IsSetOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$IsSetOperator$$.prototype.test = function $$tuna$tmpl$units$condition$IsSetOperator$$$$test$($value$$47$$) {
  return $value$$47$$ != $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$units$condition$NotEqualsOperator$$($opt_data$$10$$) {
  this.$_data$ = $opt_data$$10$$ || ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$NotEqualsOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$NotEqualsOperator$$.prototype.test = function $$tuna$tmpl$units$condition$NotEqualsOperator$$$$test$($value$$48$$) {
  return!($value$$48$$ == this.$_data$ || $value$$48$$ + "" == this.$_data$)
};
function $tuna$tmpl$units$condition$NotSetOperator$$() {
  this.$_data$ = ""
}
$tuna$utils$extend$$($tuna$tmpl$units$condition$NotSetOperator$$, $tuna$tmpl$units$condition$ConditionOperator$$);
$tuna$tmpl$units$condition$NotSetOperator$$.prototype.test = function $$tuna$tmpl$units$condition$NotSetOperator$$$$test$($value$$49$$) {
  return $value$$49$$ == $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$units$Unit$$($root$$) {
  this.$_rootTemplate$ = $root$$
}
$tuna$tmpl$units$Unit$$.prototype.$applyData$ = $JSCompiler_emptyFn$$();
$tuna$tmpl$units$Unit$$.prototype.$destroy$ = $JSCompiler_emptyFn$$();
function $tuna$tmpl$units$Spot$$($root$$1$$) {
  this.$_rootTemplate$ = $root$$1$$;
  this.$__pathEvaluator$ = new $tuna$tmpl$data$PathEvaluator$$;
  this.$_nodes$ = [];
  this.$_pattern$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$units$Spot$$, $tuna$tmpl$units$Unit$$);
$tuna$tmpl$units$Spot$$.prototype.$setPath$ = function $$tuna$tmpl$units$Spot$$$$$setPath$$($path$$6$$) {
  this.$__pathEvaluator$.$setPath$($path$$6$$)
};
$tuna$tmpl$units$Spot$$.prototype.$applyData$ = function $$tuna$tmpl$units$Spot$$$$$applyData$$($dataNode$$5_value$$50$$) {
  $dataNode$$5_value$$50$$ = this.$__pathEvaluator$.evaluate($dataNode$$5_value$$50$$).$getValue$();
  this.$_pattern$ !== $JSCompiler_alias_NULL$$ && $dataNode$$5_value$$50$$ !== $JSCompiler_alias_NULL$$ && ($dataNode$$5_value$$50$$ = this.$_pattern$.join($dataNode$$5_value$$50$$));
  this.$_applyValue$($dataNode$$5_value$$50$$)
};
$tuna$tmpl$units$Spot$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Spot$$$$$_applyValue$$($i$$20_value$$51$$) {
  var $html$$1$$ = "";
  $i$$20_value$$51$$ !== $JSCompiler_alias_NULL$$ && ($html$$1$$ = $i$$20_value$$51$$.toString());
  for($i$$20_value$$51$$ = this.$_nodes$.length - 1;0 <= $i$$20_value$$51$$;) {
    this.$_nodes$[$i$$20_value$$51$$].innerHTML !== $html$$1$$ && (this.$_nodes$[$i$$20_value$$51$$].innerHTML = $html$$1$$), $i$$20_value$$51$$--
  }
};
$tuna$tmpl$units$Spot$$.prototype.$destroy$ = function $$tuna$tmpl$units$Spot$$$$$destroy$$() {
  this.$_nodes$.length = 0
};
function $tuna$tmpl$units$Attribute$$($root$$2$$, $attributeName$$2$$) {
  $tuna$tmpl$units$Spot$$.call(this, $root$$2$$);
  this.$__attributeName$ = $attributeName$$2$$;
  this.$__hasEvent$ = $JSCompiler_alias_FALSE$$;
  this.$__dispatchAttribute$ = $tuna$utils$bind$$(this.$__dispatchAttribute$, this)
}
$tuna$utils$extend$$($tuna$tmpl$units$Attribute$$, $tuna$tmpl$units$Spot$$);
$tuna$tmpl$units$Attribute$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Attribute$$$$$_applyValue$$($i$$inline_69_value$$52$$) {
  if($i$$inline_69_value$$52$$ !== $JSCompiler_alias_NULL$$) {
    for(var $i$$inline_66$$ = this.$_nodes$.length - 1;0 <= $i$$inline_66$$;) {
      this.$_nodes$[$i$$inline_66$$][this.$__attributeName$] !== $JSCompiler_alias_VOID$$ && (this.$_nodes$[$i$$inline_66$$][this.$__attributeName$] = $i$$inline_69_value$$52$$), this.$_nodes$[$i$$inline_66$$].setAttribute(this.$__attributeName$, $i$$inline_69_value$$52$$ + ""), $i$$inline_66$$--
    }
  }else {
    for($i$$inline_69_value$$52$$ = this.$_nodes$.length - 1;0 <= $i$$inline_69_value$$52$$;) {
      this.$_nodes$[$i$$inline_69_value$$52$$][this.$__attributeName$] !== $JSCompiler_alias_VOID$$ && (this.$_nodes$[$i$$inline_69_value$$52$$][this.$__attributeName$] = ""), this.$_nodes$[$i$$inline_69_value$$52$$].removeAttribute(this.$__attributeName$), $i$$inline_69_value$$52$$--
    }
  }
  this.$__hasEvent$ && setTimeout(this.$__dispatchAttribute$, 0)
};
$tuna$tmpl$units$Attribute$$.prototype.$__dispatchAttribute$ = function $$tuna$tmpl$units$Attribute$$$$$__dispatchAttribute$$() {
  for(var $i$$23$$ = this.$_nodes$.length - 1;0 <= $i$$23$$;) {
    var $element$$inline_361_element$$inline_73$$ = this.$_nodes$[$i$$23$$], $type$$inline_74$$ = this.$__attributeName$, $event$$inline_362_event$$inline_75$$ = $JSCompiler_alias_NULL$$;
    if(document.createEventObject !== $JSCompiler_alias_VOID$$) {
      var $event$$inline_362_event$$inline_75$$ = document.createEventObject(), $eventName$$inline_76$$ = "on" + $type$$inline_74$$;
      $element$$inline_361_element$$inline_73$$[$eventName$$inline_76$$] === $JSCompiler_alias_VOID$$ ? ($event$$inline_362_event$$inline_75$$.$__type$ = $type$$inline_74$$, $element$$inline_361_element$$inline_73$$.fireEvent("onhelp", $event$$inline_362_event$$inline_75$$)) : $element$$inline_361_element$$inline_73$$.fireEvent($eventName$$inline_76$$, $event$$inline_362_event$$inline_75$$)
    }else {
      $event$$inline_362_event$$inline_75$$ = document.createEvent("UIEvents"), $event$$inline_362_event$$inline_75$$.initUIEvent($type$$inline_74$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, window, 1), $element$$inline_361_element$$inline_73$$.dispatchEvent($event$$inline_362_event$$inline_75$$)
    }
    $i$$23$$--
  }
};
function $tuna$tmpl$units$Condition$$($root$$3$$, $action$$, $operator$$) {
  $tuna$tmpl$units$Spot$$.call(this, $root$$3$$);
  this.$__action$ = $action$$;
  this.$__operator$ = $operator$$
}
$tuna$utils$extend$$($tuna$tmpl$units$Condition$$, $tuna$tmpl$units$Spot$$);
$tuna$tmpl$units$Condition$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Condition$$$$$_applyValue$$($value$$54$$) {
  for(var $testResult$$2$$ = this.$__operator$.test($value$$54$$), $i$$24$$ = this.$_nodes$.length - 1;0 <= $i$$24$$;) {
    this.$__action$.apply(this.$_nodes$[$i$$24$$], $testResult$$2$$, $value$$54$$), $i$$24$$--
  }
};
function $tuna$tmpl$units$Checkbox$$($root$$4$$) {
  $tuna$tmpl$units$Spot$$.call(this, $root$$4$$)
}
$tuna$utils$extend$$($tuna$tmpl$units$Checkbox$$, $tuna$tmpl$units$Spot$$);
$tuna$tmpl$units$Checkbox$$.prototype.$_applyValue$ = function $$tuna$tmpl$units$Checkbox$$$$$_applyValue$$($value$$55$$) {
  if($value$$55$$ !== $JSCompiler_alias_NULL$$) {
    var $i$$25$$ = this.$_nodes$.length - 1;
    if($value$$55$$ === $JSCompiler_alias_TRUE$$ || $value$$55$$ === $JSCompiler_alias_FALSE$$) {
      for(;0 <= $i$$25$$;) {
        this.$_nodes$[$i$$25$$].checked = $value$$55$$, $i$$25$$--
      }
    }else {
      if($value$$55$$ instanceof Array) {
        for(;0 <= $i$$25$$;) {
          this.$_nodes$[$i$$25$$].checked = -1 !== $tuna$utils$indexOf$$(this.$_nodes$[$i$$25$$].value, $value$$55$$), $i$$25$$--
        }
      }else {
        for($value$$55$$ += "";0 <= $i$$25$$;) {
          this.$_nodes$[$i$$25$$].checked = this.$_nodes$[$i$$25$$].value === $value$$55$$, $i$$25$$--
        }
      }
    }
  }
};
function $tuna$tmpl$units$List$$($root$$5$$) {
  this.$_rootTemplate$ = $root$$5$$;
  this.$__itemSettings$ = this.$__itemRenderer$ = this.$__templateCompiler$ = $JSCompiler_alias_NULL$$;
  this.$__itemsTable$ = {};
  this.$__pathEvaluator$ = new $tuna$tmpl$data$PathEvaluator$$;
  this.$__keyPathEvaluator$ = new $tuna$tmpl$data$PathEvaluator$$;
  this.$__listNodeRouter$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$units$List$$, $tuna$tmpl$units$Unit$$);
$tuna$tmpl$units$List$$.prototype.$setPath$ = function $$tuna$tmpl$units$List$$$$$setPath$$($path$$7$$) {
  this.$__pathEvaluator$.$setPath$($path$$7$$)
};
$tuna$tmpl$units$List$$.prototype.$applyData$ = function $$tuna$tmpl$units$List$$$$$applyData$$($dataNode$$6_sampleNode_templateTarget$$inline_87$$) {
  var $oldItemsTable$$ = this.$__itemsTable$;
  this.$__itemsTable$ = {};
  var $dataNode$$6_sampleNode_templateTarget$$inline_87$$ = this.$__pathEvaluator$.evaluate($dataNode$$6_sampleNode_templateTarget$$inline_87$$), $sample$$ = $dataNode$$6_sampleNode_templateTarget$$inline_87$$.$getValue$(), $itemTemplate_templateTarget$$inline_81$$ = $JSCompiler_alias_NULL$$, $itemNode$$ = $JSCompiler_alias_NULL$$, $key$$19$$ = $JSCompiler_alias_NULL$$, $index$$53_template$$inline_86$$;
  for($index$$53_template$$inline_86$$ in $sample$$) {
    if($itemNode$$ = $JSCompiler_StaticMethods_growChild$$($dataNode$$6_sampleNode_templateTarget$$inline_87$$, $index$$53_template$$inline_86$$), $key$$19$$ = this.$__keyPathEvaluator$.evaluate($itemNode$$).getStringValue(), $key$$19$$ !== $JSCompiler_alias_NULL$$) {
      if($oldItemsTable$$[$key$$19$$] === $JSCompiler_alias_VOID$$) {
        if($itemTemplate_templateTarget$$inline_81$$ = this.$__itemRenderer$.cloneNode($JSCompiler_alias_TRUE$$), $itemTemplate_templateTarget$$inline_81$$ !== $JSCompiler_alias_NULL$$ && this.$__itemSettings$ !== $JSCompiler_alias_NULL$$) {
          var $template$$inline_82$$ = this.$__templateCompiler$.compile(this.$__itemSettings$, $itemTemplate_templateTarget$$inline_81$$, this.$_rootTemplate$);
          this.$__listNodeRouter$.append($itemTemplate_templateTarget$$inline_81$$);
          $itemTemplate_templateTarget$$inline_81$$ = $template$$inline_82$$
        }else {
          $itemTemplate_templateTarget$$inline_81$$ = $JSCompiler_alias_NULL$$
        }
      }else {
        $itemTemplate_templateTarget$$inline_81$$ = $oldItemsTable$$[$key$$19$$], delete $oldItemsTable$$[$key$$19$$]
      }
      $itemTemplate_templateTarget$$inline_81$$ !== $JSCompiler_alias_NULL$$ && ($itemTemplate_templateTarget$$inline_81$$.$applyData$($itemNode$$), this.$__itemsTable$[$key$$19$$] = $itemTemplate_templateTarget$$inline_81$$)
    }
  }
  var $dataNode$$6_sampleNode_templateTarget$$inline_87$$ = $index$$53_template$$inline_86$$ = $JSCompiler_alias_NULL$$, $key$$inline_88$$;
  for($key$$inline_88$$ in $oldItemsTable$$) {
    $index$$53_template$$inline_86$$ = $oldItemsTable$$[$key$$inline_88$$], $dataNode$$6_sampleNode_templateTarget$$inline_87$$ = $index$$53_template$$inline_86$$.$getTarget$(), $dataNode$$6_sampleNode_templateTarget$$inline_87$$ !== $JSCompiler_alias_NULL$$ && this.$__listNodeRouter$.remove($dataNode$$6_sampleNode_templateTarget$$inline_87$$), $index$$53_template$$inline_86$$.$destroy$()
  }
};
$tuna$tmpl$units$List$$.prototype.$destroy$ = function $$tuna$tmpl$units$List$$$$$destroy$$() {
  for(var $key$$20$$ in this.$__itemsTable$) {
    this.$__itemsTable$[$key$$20$$].$destroy$()
  }
  this.$__itemsTable$ = {}
};
function $tuna$tmpl$units$Template$$($opt_root$$) {
  this.$_rootTemplate$ = $opt_root$$ || this;
  this.$__items$ = [];
  this.$__createdChildren$ = [];
  this.$__removedChildren$ = [];
  this.$__target$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$tmpl$units$Template$$, $tuna$tmpl$units$Unit$$);
$tuna$tmpl$units$Template$$.prototype.$getTarget$ = $JSCompiler_get$$("$__target$");
$tuna$tmpl$units$Template$$.prototype.$applyData$ = function $$tuna$tmpl$units$Template$$$$$applyData$$($dataNode$$7$$) {
  for(var $i$$26$$ = this.$__items$.length - 1;0 <= $i$$26$$;) {
    this.$__items$[$i$$26$$].$applyData$($dataNode$$7$$), $i$$26$$--
  }
};
$tuna$tmpl$units$Template$$.prototype.$destroy$ = function $$tuna$tmpl$units$Template$$$$$destroy$$() {
  for(;0 < this.$__items$.length;) {
    this.$__items$.shift().$destroy$()
  }
  this.$__target$ = $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$compilers$TemplateCompiler$$() {
  this.$__itemCompilers$ = {}
}
$tuna$tmpl$compilers$TemplateCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$TemplateCompiler$$$$compile$($settings$$2$$, $element$$43$$, $opt_root$$1_root$$7$$) {
  var $template$$3$$ = new $tuna$tmpl$units$Template$$($opt_root$$1_root$$7$$);
  $template$$3$$.$__target$ = $element$$43$$;
  for(var $i$$27$$ = 0, $l$$17$$ = $settings$$2$$.$getItemsCount$(), $opt_root$$1_root$$7$$ = $opt_root$$1_root$$7$$ || $template$$3$$, $compiler$$2_items$$3$$ = $JSCompiler_alias_NULL$$, $itemSettings$$2$$ = $compiler$$2_items$$3$$ = $JSCompiler_alias_NULL$$;$i$$27$$ < $l$$17$$;) {
    $itemSettings$$2$$ = $settings$$2$$.$getItemAt$($i$$27$$), $compiler$$2_items$$3$$ = this.$__itemCompilers$[$itemSettings$$2$$.$getType$()], $compiler$$2_items$$3$$ !== $JSCompiler_alias_VOID$$ && ($compiler$$2_items$$3$$ = $compiler$$2_items$$3$$.compile($element$$43$$, $itemSettings$$2$$, $opt_root$$1_root$$7$$), $compiler$$2_items$$3$$ !== $JSCompiler_alias_NULL$$ && ($template$$3$$.$__items$ = $template$$3$$.$__items$.concat($compiler$$2_items$$3$$))), $i$$27$$++
  }
  return $template$$3$$
};
function $tuna$tmpl$compilers$SpotCompiler$$() {
}
$tuna$tmpl$compilers$SpotCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$SpotCompiler$$$$compile$($element$$44$$, $settings$$3$$, $root$$8_spot$$1$$) {
  return $settings$$3$$ instanceof $tuna$tmpl$settings$SpotSettings$$ ? ($root$$8_spot$$1$$ = new $tuna$tmpl$units$Spot$$($root$$8_spot$$1$$), $JSCompiler_StaticMethods__setupSpot$$($element$$44$$, $root$$8_spot$$1$$, $settings$$3$$), $root$$8_spot$$1$$) : $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods__setupSpot$$($element$$45_elements$$inline_105$$, $spot$$2$$, $selector$$12_settings$$4$$) {
  $spot$$2$$.$setPath$($selector$$12_settings$$4$$.$dataPath$);
  $selector$$12_settings$$4$$.pattern !== $JSCompiler_alias_NULL$$ && ($spot$$2$$.$_pattern$ = $selector$$12_settings$$4$$.pattern.split("$$"));
  $selector$$12_settings$$4$$ = $selector$$12_settings$$4$$.$targetSelector$;
  $tuna$dom$matchesSelector$$($element$$45_elements$$inline_105$$, $selector$$12_settings$$4$$) || ($element$$45_elements$$inline_105$$ = $tuna$dom$select$$($selector$$12_settings$$4$$, $element$$45_elements$$inline_105$$));
  $spot$$2$$.$_nodes$ = $spot$$2$$.$_nodes$.concat($element$$45_elements$$inline_105$$)
}
;function $tuna$tmpl$compilers$AttributeCompiler$$() {
}
$tuna$utils$extend$$($tuna$tmpl$compilers$AttributeCompiler$$, $tuna$tmpl$compilers$SpotCompiler$$);
$tuna$tmpl$compilers$AttributeCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$AttributeCompiler$$$$compile$($element$$46$$, $settings$$5$$, $attribute$$3_root$$9$$) {
  return $settings$$5$$ instanceof $tuna$tmpl$settings$AttributeSettings$$ ? ($attribute$$3_root$$9$$ = new $tuna$tmpl$units$Attribute$$($attribute$$3_root$$9$$, $settings$$5$$.$attributeName$), $JSCompiler_StaticMethods__setupSpot$$($element$$46$$, $attribute$$3_root$$9$$, $settings$$5$$), $attribute$$3_root$$9$$.$__hasEvent$ = $settings$$5$$.$hasEvent$, $attribute$$3_root$$9$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$compilers$ConditionCompiler$$() {
  this.$__actions$ = {};
  this.$__operators$ = {}
}
$tuna$utils$extend$$($tuna$tmpl$compilers$ConditionCompiler$$, $tuna$tmpl$compilers$SpotCompiler$$);
$tuna$tmpl$compilers$ConditionCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$ConditionCompiler$$$$compile$($element$$47$$, $settings$$6$$, $condition$$2_root$$10$$) {
  if($settings$$6$$ instanceof $tuna$tmpl$settings$ConditionSettings$$) {
    var $action$$2_actionPrototype$$ = this.$__actions$[$settings$$6$$.$actionType$], $operator$$2_operatorPrototype$$ = this.$__operators$[$settings$$6$$.$operatorType$];
    if($action$$2_actionPrototype$$ !== $JSCompiler_alias_VOID$$ && $operator$$2_operatorPrototype$$ !== $JSCompiler_alias_VOID$$) {
      return $action$$2_actionPrototype$$ = $action$$2_actionPrototype$$.$clone$($settings$$6$$.$actionData$), $operator$$2_operatorPrototype$$ = $operator$$2_operatorPrototype$$.$clone$($settings$$6$$.$operatorData$), $condition$$2_root$$10$$ = new $tuna$tmpl$units$Condition$$($condition$$2_root$$10$$, $action$$2_actionPrototype$$, $operator$$2_operatorPrototype$$), $JSCompiler_StaticMethods__setupSpot$$($element$$47$$, $condition$$2_root$$10$$, $settings$$6$$), $condition$$2_root$$10$$
    }
  }
  return $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$compilers$CheckboxCompiler$$() {
}
$tuna$utils$extend$$($tuna$tmpl$compilers$CheckboxCompiler$$, $tuna$tmpl$compilers$SpotCompiler$$);
$tuna$tmpl$compilers$CheckboxCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$CheckboxCompiler$$$$compile$($element$$48$$, $settings$$7$$, $checkbox$$1_root$$11$$) {
  return $settings$$7$$ instanceof $tuna$tmpl$settings$CheckboxSettings$$ ? ($checkbox$$1_root$$11$$ = new $tuna$tmpl$units$Checkbox$$($checkbox$$1_root$$11$$), $JSCompiler_StaticMethods__setupSpot$$($element$$48$$, $checkbox$$1_root$$11$$, $settings$$7$$), $checkbox$$1_root$$11$$) : $JSCompiler_alias_NULL$$
};
function $tuna$tmpl$compilers$ListCompiler$$($compiler$$3$$) {
  this.$__templateCompiler$ = $compiler$$3$$
}
$tuna$tmpl$compilers$ListCompiler$$.prototype.compile = function $$tuna$tmpl$compilers$ListCompiler$$$$compile$($element$$49$$, $settings$$8$$, $root$$12$$) {
  if($settings$$8$$ instanceof $tuna$tmpl$settings$ListSettings$$) {
    var $renderer$$ = document.getElementById($settings$$8$$.$itemRendererID$);
    if($renderer$$ !== $JSCompiler_alias_NULL$$) {
      $renderer$$ = $renderer$$.cloneNode($JSCompiler_alias_TRUE$$);
      $renderer$$.removeAttribute("id");
      var $selector$$13$$ = $settings$$8$$.$targetSelector$;
      if($tuna$dom$matchesSelector$$($element$$49$$, $selector$$13$$)) {
        return $JSCompiler_StaticMethods___compileList$$(this, $element$$49$$, $renderer$$, $settings$$8$$, $root$$12$$)
      }
      for(var $lists$$ = [], $elements$$3$$ = $tuna$dom$select$$($selector$$13$$, $element$$49$$), $i$$28$$ = $elements$$3$$.length - 1;0 <= $i$$28$$;) {
        $tuna$dom$getParentMatches$$($elements$$3$$[$i$$28$$], $selector$$13$$, $element$$49$$) === $JSCompiler_alias_NULL$$ && $lists$$.push($JSCompiler_StaticMethods___compileList$$(this, $elements$$3$$[$i$$28$$], $renderer$$, $settings$$8$$, $root$$12$$)), $i$$28$$--
      }
      return $lists$$
    }
    throw'Cannot find item renderer with id: "' + $settings$$8$$.$itemRendererID$ + '"';
  }
  return $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods___compileList$$($JSCompiler_StaticMethods___compileList$self$$, $element$$50$$, $itemRenderer$$, $settings$$9$$, $root$$13$$) {
  var $list$$3$$ = new $tuna$tmpl$units$List$$($root$$13$$);
  $list$$3$$.$__templateCompiler$ = $JSCompiler_StaticMethods___compileList$self$$.$__templateCompiler$;
  $list$$3$$.$__itemRenderer$ = $itemRenderer$$;
  $list$$3$$.$__itemSettings$ = $settings$$9$$.$itemSettings$;
  $list$$3$$.$__keyPathEvaluator$.$setPath$($settings$$9$$.keyPath);
  $list$$3$$.$setPath$($settings$$9$$.$dataPath$);
  $list$$3$$.$__listNodeRouter$ = new $tuna$tmpl$units$list$ListContainerRouter$$($element$$50$$, $root$$13$$);
  return $list$$3$$
}
;var $tuna$tmpl$__compiler$$ = $JSCompiler_alias_NULL$$, $tuna$tmpl$__markupBuilder$$ = $JSCompiler_alias_NULL$$, $tuna$tmpl$__settingsTable$$ = {};
function $tuna$ui$Module$$($selector$$14$$) {
  this.$_selector$ = $selector$$14$$
}
$tuna$ui$Module$$.prototype.$init$ = function $$tuna$ui$Module$$$$$init$$($context$$2$$, $container$$1$$) {
  var $instances$$ = [], $targets_targets$$inline_174$$;
  $targets_targets$$inline_174$$ = $tuna$dom$select$$(this.$_selector$, $context$$2$$);
  $targets_targets$$inline_174$$ = $targets_targets$$inline_174$$.concat($tuna$dom$__selectorEngine$$ !== $JSCompiler_alias_NULL$$ ? $tuna$dom$__selectorEngine$$.matches(this.$_selector$, [$context$$2$$]) : []);
  for(var $i$$29$$ = 0, $l$$18$$ = $targets_targets$$inline_174$$.length, $instance_target$$inline_177$$ = $JSCompiler_alias_NULL$$;$i$$29$$ < $l$$18$$;) {
    for(var $instance_target$$inline_177$$ = $targets_targets$$inline_174$$[$i$$29$$], $context$$inline_178$$ = $context$$2$$, $JSCompiler_temp$$347_JSCompiler_temp$$348_className$$inline_367_result$$inline_179$$ = $JSCompiler_alias_TRUE$$, $isolators$$inline_180$$ = $tuna$ui$__isolators$$, $i$$inline_181$$ = 0, $l$$inline_182$$ = $isolators$$inline_180$$.length;$i$$inline_181$$ < $l$$inline_182$$;) {
      if($instance_target$$inline_177$$ !== $context$$inline_178$$) {
        if($JSCompiler_temp$$347_JSCompiler_temp$$348_className$$inline_367_result$$inline_179$$ && ($JSCompiler_temp$$347_JSCompiler_temp$$348_className$$inline_367_result$$inline_179$$ = !$tuna$dom$hasClass$$($instance_target$$inline_177$$, $isolators$$inline_180$$[$i$$inline_181$$]))) {
          for(var $JSCompiler_temp$$347_JSCompiler_temp$$348_className$$inline_367_result$$inline_179$$ = $isolators$$inline_180$$[$i$$inline_181$$], $opt_context$$inline_368$$ = $context$$inline_178$$, $parent$$inline_369$$ = $instance_target$$inline_177$$.parentNode;$parent$$inline_369$$ !== $JSCompiler_alias_NULL$$ && $parent$$inline_369$$ !== $opt_context$$inline_368$$ && !$tuna$dom$hasClass$$($parent$$inline_369$$, $JSCompiler_temp$$347_JSCompiler_temp$$348_className$$inline_367_result$$inline_179$$);) {
            $parent$$inline_369$$ = $parent$$inline_369$$.parentNode
          }
          $JSCompiler_temp$$347_JSCompiler_temp$$348_className$$inline_367_result$$inline_179$$ = ($parent$$inline_369$$ === $opt_context$$inline_368$$ ? $JSCompiler_alias_NULL$$ : $parent$$inline_369$$) === $JSCompiler_alias_NULL$$
        }
        if(!$JSCompiler_temp$$347_JSCompiler_temp$$348_className$$inline_367_result$$inline_179$$) {
          break
        }
      }
      $i$$inline_181$$++
    }
    $JSCompiler_temp$$347_JSCompiler_temp$$348_className$$inline_367_result$$inline_179$$ && ($instance_target$$inline_177$$ = this.$initInstance$($targets_targets$$inline_174$$[$i$$29$$], $container$$1$$), $instance_target$$inline_177$$ !== $JSCompiler_alias_NULL$$ && ($instances$$.push($instance_target$$inline_177$$), $JSCompiler_StaticMethods_getBooleanOption$$($instance_target$$inline_177$$, "not-init") || $instance_target$$inline_177$$.$init$()));
    $i$$29$$++
  }
  return $instances$$
};
$tuna$ui$Module$$.prototype.$destroy$ = function $$tuna$ui$Module$$$$$destroy$$($instances$$1_l$$20$$) {
  for(var $i$$31$$ = 0, $instances$$1_l$$20$$ = $instances$$1_l$$20$$.length;$i$$31$$ < $instances$$1_l$$20$$;) {
    $i$$31$$++
  }
};
$tuna$ui$Module$$.prototype.$initInstance$ = $JSCompiler_emptyFn$$();
function $tuna$ui$ModuleInstance$$($target$$40$$) {
  $tuna$events$EventDispatcher$$.call(this);
  this.$_target$ = $target$$40$$;
  this.$__defaultOptions$ = {}
}
$tuna$utils$extend$$($tuna$ui$ModuleInstance$$, $tuna$events$EventDispatcher$$);
$JSCompiler_prototypeAlias$$ = $tuna$ui$ModuleInstance$$.prototype;
$JSCompiler_prototypeAlias$$.$getTarget$ = $JSCompiler_get$$("$_target$");
$JSCompiler_prototypeAlias$$.getName = function $$JSCompiler_prototypeAlias$$$getName$() {
  return this.$_target$.getAttribute("data-name")
};
$JSCompiler_prototypeAlias$$.isEnabled = function $$JSCompiler_prototypeAlias$$$isEnabled$() {
  return!$tuna$dom$hasClass$$(this.$_target$, "disabled")
};
function $JSCompiler_StaticMethods__setDefaultOption$$($JSCompiler_StaticMethods__setDefaultOption$self$$, $name$$67$$, $option$$) {
  $option$$ === $JSCompiler_alias_NULL$$ ? delete $JSCompiler_StaticMethods__setDefaultOption$self$$.$__defaultOptions$[$name$$67$$] : $JSCompiler_StaticMethods__setDefaultOption$self$$.$__defaultOptions$[$name$$67$$] = $option$$
}
function $JSCompiler_StaticMethods_setOption$$($JSCompiler_StaticMethods_setOption$self$$, $name$$68$$, $option$$1$$) {
  $option$$1$$ ? $JSCompiler_StaticMethods_setOption$self$$.$_target$.setAttribute("data-" + $name$$68$$, $option$$1$$) : $JSCompiler_StaticMethods_setOption$self$$.$_target$.removeAttribute("data-" + $name$$68$$)
}
function $JSCompiler_StaticMethods_getOption$$($JSCompiler_StaticMethods_getOption$self$$) {
  var $option$$2$$ = $JSCompiler_StaticMethods_getOption$self$$.$_target$.getAttribute("data-popup-id");
  $option$$2$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getOption$self$$.$__defaultOptions$["popup-id"] !== $JSCompiler_alias_VOID$$ && ($option$$2$$ = $JSCompiler_StaticMethods_getOption$self$$.$__defaultOptions$["popup-id"]);
  return $option$$2$$
}
function $JSCompiler_StaticMethods_getStringOption$$($JSCompiler_StaticMethods_getStringOption$self$$, $name$$70$$) {
  var $option$$3$$ = $JSCompiler_StaticMethods_getStringOption$self$$.$_target$.getAttribute("data-" + $name$$70$$);
  $option$$3$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getStringOption$self$$.$__defaultOptions$[$name$$70$$] !== $JSCompiler_alias_VOID$$ && ($option$$3$$ = $JSCompiler_StaticMethods_getStringOption$self$$.$__defaultOptions$[$name$$70$$]);
  return $option$$3$$
}
function $JSCompiler_StaticMethods_getNumberOption$$($JSCompiler_StaticMethods_getNumberOption$self$$, $name$$71$$) {
  var $option$$4$$ = $JSCompiler_StaticMethods_getNumberOption$self$$.$_target$.getAttribute("data-" + $name$$71$$);
  $option$$4$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getNumberOption$self$$.$__defaultOptions$[$name$$71$$] !== $JSCompiler_alias_VOID$$ && ($option$$4$$ = $JSCompiler_StaticMethods_getNumberOption$self$$.$__defaultOptions$[$name$$71$$]);
  return Number($option$$4$$)
}
function $JSCompiler_StaticMethods_getBooleanOption$$($JSCompiler_StaticMethods_getBooleanOption$self$$, $name$$72$$) {
  var $option$$5$$ = $JSCompiler_StaticMethods_getBooleanOption$self$$.$_target$.getAttribute("data-" + $name$$72$$);
  $option$$5$$ === $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_getBooleanOption$self$$.$__defaultOptions$[$name$$72$$] !== $JSCompiler_alias_VOID$$ && ($option$$5$$ = $JSCompiler_StaticMethods_getBooleanOption$self$$.$__defaultOptions$[$name$$72$$]);
  return!!$option$$5$$
}
$JSCompiler_prototypeAlias$$.$init$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$destroy$ = $JSCompiler_emptyFn$$();
function $tuna$ui$ModuleContainer$$($target$$41$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$41$$);
  this.$__modules$ = [];
  this.$__instances$ = {}
}
$tuna$utils$extend$$($tuna$ui$ModuleContainer$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$ModuleContainer$$.prototype.$isActive$ = function $$tuna$ui$ModuleContainer$$$$$isActive$$() {
  return document.getElementById(this.$_target$.id) === this.$_target$
};
function $JSCompiler_StaticMethods_initModules$$($JSCompiler_StaticMethods_initModules$self$$, $target$$42$$) {
  $target$$42$$ = $target$$42$$ || $JSCompiler_StaticMethods_initModules$self$$.$_target$;
  $target$$42$$.id === $JSCompiler_alias_NULL$$ && ($target$$42$$.id = "container_" + $tuna$ui$__lastId$$++);
  var $instances$$2_targetId$$ = $target$$42$$.id;
  $JSCompiler_StaticMethods_initModules$self$$.$__instances$[$instances$$2_targetId$$] === $JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_initModules$self$$.$__instances$[$instances$$2_targetId$$] = {});
  for(var $instances$$2_targetId$$ = $JSCompiler_StaticMethods_initModules$self$$.$__instances$[$instances$$2_targetId$$], $i$$32$$ = 0, $l$$21$$ = $JSCompiler_StaticMethods_initModules$self$$.$__modules$.length, $type$$72$$ = $JSCompiler_alias_NULL$$, $module$$ = $JSCompiler_alias_NULL$$;$i$$32$$ < $l$$21$$;) {
    $type$$72$$ = $JSCompiler_StaticMethods_initModules$self$$.$__modules$[$i$$32$$];
    $module$$ = $tuna$ui$__typeTable$$[$type$$72$$] !== $JSCompiler_alias_VOID$$ ? $tuna$ui$__typeTable$$[$type$$72$$] : $JSCompiler_alias_NULL$$;
    if($module$$ !== $JSCompiler_alias_NULL$$) {
      $instances$$2_targetId$$[$type$$72$$] === $JSCompiler_alias_VOID$$ && ($instances$$2_targetId$$[$type$$72$$] = []), $instances$$2_targetId$$[$type$$72$$] = $instances$$2_targetId$$[$type$$72$$].concat($module$$.$init$($target$$42$$, $JSCompiler_StaticMethods_initModules$self$$))
    }else {
      throw'Unknown module "' + $type$$72$$ + '"';
    }
    $i$$32$$++
  }
}
function $JSCompiler_StaticMethods_destroyModules$$($JSCompiler_StaticMethods_destroyModules$self$$, $target$$43$$) {
  if($target$$43$$ === $JSCompiler_alias_VOID$$) {
    for(var $targetId$$3$$ in $JSCompiler_StaticMethods_destroyModules$self$$.$__instances$) {
      $JSCompiler_StaticMethods___destroyModulesById$$($JSCompiler_StaticMethods_destroyModules$self$$, $targetId$$3$$)
    }
  }else {
    $JSCompiler_StaticMethods___destroyModulesById$$($JSCompiler_StaticMethods_destroyModules$self$$, $target$$43$$.id)
  }
}
function $JSCompiler_StaticMethods___destroyModulesById$$($JSCompiler_StaticMethods___destroyModulesById$self$$, $targetId$$4$$) {
  var $module$$1$$ = $JSCompiler_alias_NULL$$, $name$$74$$;
  for($name$$74$$ in $JSCompiler_StaticMethods___destroyModulesById$self$$.$__instances$[$targetId$$4$$]) {
    $module$$1$$ = $tuna$ui$__typeTable$$[$name$$74$$] !== $JSCompiler_alias_VOID$$ ? $tuna$ui$__typeTable$$[$name$$74$$] : $JSCompiler_alias_NULL$$, $module$$1$$ !== $JSCompiler_alias_NULL$$ && $module$$1$$.$destroy$($JSCompiler_StaticMethods___destroyModulesById$self$$.$__instances$[$targetId$$4$$][$name$$74$$]), $JSCompiler_StaticMethods___destroyModulesById$self$$.$__instances$[$targetId$$4$$][$name$$74$$].length = 0
  }
  delete $JSCompiler_StaticMethods___destroyModulesById$self$$.$__instances$[$targetId$$4$$]
}
;var $tuna$ui$__lastId$$ = 0, $tuna$ui$__typeTable$$ = {}, $tuna$ui$__isolators$$ = [];
function $tuna$ui$popups$Popup$$($target$$44$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$44$$);
  this.$__isInit$ = $JSCompiler_alias_FALSE$$
}
$tuna$utils$extend$$($tuna$ui$popups$Popup$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$popups$Popup$$.prototype.$init$ = function $$tuna$ui$popups$Popup$$$$$init$$() {
  if(!this.$__isInit$) {
    var $self$$3$$ = this;
    $tuna$dom$addChildEventListener$$(this.$_target$, ".j-popup-close", "click", function($event$$15$$) {
      $tuna$dom$preventDefault$$($event$$15$$);
      $self$$3$$.close()
    });
    $tuna$dom$addChildEventListener$$(this.$_target$, ".j-popup-apply", "click", function($event$$16$$) {
      $tuna$dom$preventDefault$$($event$$16$$);
      $self$$3$$.apply()
    })
  }
};
$tuna$ui$popups$Popup$$.prototype.open = function $$tuna$ui$popups$Popup$$$$open$() {
  this.$dispatch$("open") && $tuna$dom$addClass$$(this.$_target$, "show")
};
$tuna$ui$popups$Popup$$.prototype.close = function $$tuna$ui$popups$Popup$$$$close$() {
  this.$dispatch$("close") && $tuna$dom$removeClass$$(this.$_target$, "show")
};
$tuna$ui$popups$Popup$$.prototype.apply = function $$tuna$ui$popups$Popup$$$$apply$() {
  this.$dispatch$("apply", $JSCompiler_StaticMethods___collectData$$(this)) && $tuna$dom$removeClass$$(this.$_target$, "show")
};
function $JSCompiler_StaticMethods___collectData$$($JSCompiler_StaticMethods___collectData$self_JSCompiler_temp$$6_result$$inline_191$$) {
  var $elements$$inline_192_form$$ = $tuna$dom$selectOne$$("form.j-popup-form", $JSCompiler_StaticMethods___collectData$self_JSCompiler_temp$$6_result$$inline_191$$.$_target$);
  if($elements$$inline_192_form$$ !== $JSCompiler_alias_NULL$$) {
    for(var $JSCompiler_StaticMethods___collectData$self_JSCompiler_temp$$6_result$$inline_191$$ = {}, $elements$$inline_192_form$$ = $elements$$inline_192_form$$.elements, $i$$inline_193$$ = 0, $l$$inline_194$$ = $elements$$inline_192_form$$.length, $name$$inline_195$$ = $JSCompiler_alias_NULL$$;$i$$inline_193$$ < $l$$inline_194$$;) {
      $name$$inline_195$$ = $elements$$inline_192_form$$[$i$$inline_193$$].name, $JSCompiler_StaticMethods___collectData$self_JSCompiler_temp$$6_result$$inline_191$$[$name$$inline_195$$] !== $JSCompiler_alias_VOID$$ ? ($JSCompiler_StaticMethods___collectData$self_JSCompiler_temp$$6_result$$inline_191$$[$name$$inline_195$$] instanceof Array || ($JSCompiler_StaticMethods___collectData$self_JSCompiler_temp$$6_result$$inline_191$$[$name$$inline_195$$] = [$JSCompiler_StaticMethods___collectData$self_JSCompiler_temp$$6_result$$inline_191$$[$name$$inline_195$$]]), 
      $JSCompiler_StaticMethods___collectData$self_JSCompiler_temp$$6_result$$inline_191$$[$name$$inline_195$$].push($elements$$inline_192_form$$[$i$$inline_193$$].value)) : $JSCompiler_StaticMethods___collectData$self_JSCompiler_temp$$6_result$$inline_191$$[$name$$inline_195$$] = $elements$$inline_192_form$$[$i$$inline_193$$].value, $i$$inline_193$$++
    }
  }else {
    $JSCompiler_StaticMethods___collectData$self_JSCompiler_temp$$6_result$$inline_191$$ = $JSCompiler_alias_NULL$$
  }
  return $JSCompiler_StaticMethods___collectData$self_JSCompiler_temp$$6_result$$inline_191$$
}
;var $tuna$ui$popups$__idTable$$ = {}, $tuna$ui$popups$__lastId$$ = 0;
function $tuna$ui$popups$create$$($target$$45$$) {
  "" === $target$$45$$.id && ($target$$45$$.id = "popup_" + $tuna$ui$popups$__lastId$$++);
  if($tuna$ui$popups$__idTable$$[$target$$45$$.id] === $JSCompiler_alias_VOID$$) {
    var $popup$$ = new $tuna$ui$popups$Popup$$($target$$45$$);
    $popup$$.$init$();
    $tuna$ui$popups$__idTable$$[$target$$45$$.id] = $popup$$
  }
  return $tuna$ui$popups$__idTable$$[$target$$45$$.id]
}
;function $tuna$ui$buttons$Button$$($target$$48$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$48$$);
  this.$_isInit$ = $JSCompiler_alias_FALSE$$
}
$tuna$utils$extend$$($tuna$ui$buttons$Button$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$buttons$Button$$.prototype.$init$ = function $$tuna$ui$buttons$Button$$$$$init$$() {
  if(!this.$_isInit$) {
    this.$_isInit$ = $JSCompiler_alias_TRUE$$;
    var $self$$4$$ = this;
    $tuna$dom$addEventListener$$(this.$_target$, "click", function($event$$18$$) {
      $self$$4$$.isEnabled() ? $self$$4$$.$dispatch$("click") : $tuna$dom$stopPropagation$$($event$$18$$)
    })
  }
};
$tuna$ui$buttons$Button$$.prototype.setActive = function $$tuna$ui$buttons$Button$$$$setActive$($isActive$$) {
  $tuna$dom$setClassExist$$(this.$_target$, "active", $isActive$$)
};
function $tuna$ui$buttons$PopupButton$$($target$$49$$) {
  $tuna$ui$buttons$Button$$.call(this, $target$$49$$);
  this.$_popup$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$buttons$PopupButton$$, $tuna$ui$buttons$Button$$);
$tuna$ui$buttons$PopupButton$$.prototype.$init$ = function $$tuna$ui$buttons$PopupButton$$$$$init$$() {
  var $popupId_popupTarget$$ = $JSCompiler_StaticMethods_getOption$$(this);
  $popupId_popupTarget$$ !== $JSCompiler_alias_NULL$$ && ($popupId_popupTarget$$ = $tuna$dom$selectOne$$("#" + $popupId_popupTarget$$), $popupId_popupTarget$$ !== $JSCompiler_alias_NULL$$ && (this.$_popup$ = $tuna$ui$popups$create$$($popupId_popupTarget$$)));
  var $self$$5$$ = this;
  $tuna$dom$addEventListener$$(this.$_target$, "click", function($event$$19$$) {
    $self$$5$$.isEnabled() ? $self$$5$$.$dispatch$("click") && $self$$5$$.$_popup$ !== $JSCompiler_alias_NULL$$ && $self$$5$$.$_popup$.open() : $tuna$dom$stopPropagation$$($event$$19$$)
  })
};
function $tuna$ui$buttons$ButtonGroup$$($target$$50$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$50$$);
  this.$__defaultAction$ = $JSCompiler_alias_NULL$$;
  this.$__isPreventDefault$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "button-selector", ".j-button")
}
$tuna$utils$extend$$($tuna$ui$buttons$ButtonGroup$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$buttons$ButtonGroup$$.prototype.$init$ = function $$tuna$ui$buttons$ButtonGroup$$$$$init$$() {
  var $self$$6$$ = this, $buttonSelector$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "button-selector");
  $buttonSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$(this.$_target$, $buttonSelector$$, "click", function($event$$20$$) {
    $self$$6$$.$__isPreventDefault$ && $tuna$dom$preventDefault$$($event$$20$$);
    var $button$$ = $tuna$ui$buttons$create$$(this), $action$$4$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$, "action");
    $action$$4$$ === $JSCompiler_alias_NULL$$ && ($action$$4$$ = $self$$6$$.$__defaultAction$);
    $action$$4$$ !== $JSCompiler_alias_NULL$$ && ($self$$6$$.$dispatch$($action$$4$$, $button$$) || $tuna$dom$stopPropagation$$($event$$20$$))
  })
};
var $tuna$ui$buttons$__idTable$$ = {}, $tuna$ui$buttons$__lastId$$ = 0;
function $tuna$ui$buttons$create$$($target$$51$$) {
  "" === $target$$51$$.id && ($target$$51$$.id = "button_" + $tuna$ui$buttons$__lastId$$++);
  if($tuna$ui$buttons$__idTable$$[$target$$51$$.id] === $JSCompiler_alias_VOID$$) {
    var $button$$1$$ = new $tuna$ui$buttons$Button$$($target$$51$$);
    $button$$1$$.$init$();
    $tuna$ui$buttons$__idTable$$[$target$$51$$.id] = $button$$1$$
  }
  return $tuna$ui$buttons$__idTable$$[$target$$51$$.id]
}
;function $tuna$ui$flash$SWF$$($target$$52$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$52$$);
  this.$__movieId$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "wmode", "opaque");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "menu", $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "allow-fullscreen", $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "allow-script-access", "always")
}
$tuna$utils$extend$$($tuna$ui$flash$SWF$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$flash$SWF$$.prototype.$init$ = function $$tuna$ui$flash$SWF$$$$$init$$() {
  this.$__movieId$ = "swf_" + $tuna$ui$flash$__lastId$$++;
  this.$_target$.innerHTML = '<div id="' + this.$__movieId$ + '"></div>';
  swfobject.embedSWF($JSCompiler_StaticMethods_getStringOption$$(this, "src"), this.$__movieId$, $JSCompiler_StaticMethods_getNumberOption$$(this, "width"), $JSCompiler_StaticMethods_getNumberOption$$(this, "height"), "10.0.0", $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_getStringOption$$(this, "flashvars"), {wmode:$JSCompiler_StaticMethods_getStringOption$$(this, "wmode"), allowfullscreen:$JSCompiler_StaticMethods_getStringOption$$(this, "allow-fullscreen"), allowscriptaccess:$JSCompiler_StaticMethods_getStringOption$$(this, 
  "allow-script-access"), menu:$JSCompiler_StaticMethods_getStringOption$$(this, "menu")})
};
$tuna$ui$flash$SWF$$.prototype.$destroy$ = function $$tuna$ui$flash$SWF$$$$$destroy$$() {
  this.$_target$.innerHTML = "";
  this.$__movieId$ = $JSCompiler_alias_NULL$$
};
var $tuna$ui$flash$__lastId$$ = 0;
function $tuna$ui$forms$Form$$($target$$53$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$53$$);
  this.$__formMessage$ = $JSCompiler_alias_NULL$$;
  this.$__inputTable$ = {};
  this.$__recordName$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$forms$Form$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$forms$Form$$.prototype.$init$ = function $$tuna$ui$forms$Form$$$$$init$$() {
  this.$__recordName$ = $JSCompiler_StaticMethods_getStringOption$$(this, "record-type");
  this.$__formMessage$ = $tuna$dom$selectOne$$(".j-form-message", this.$_target$);
  var $callbackInput$$ = document.createElement("input");
  $callbackInput$$.type = "hidden";
  $callbackInput$$.name = "__callback";
  this.$_target$.appendChild($callbackInput$$);
  var $self$$7$$ = this;
  $tuna$dom$addEventListener$$(this.$_target$, "submit", function($event$$21$$) {
    $self$$7$$.isEnabled() ? ($callbackInput$$.value = "form_callback" + (Math.random() + "").substr(2), window[$callbackInput$$.value] = function $window$$callbackInput$$$value$($data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$) {
      var $data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$ = JSON.parse(JSON.stringify($data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$)), $i$$inline_381_l$$inline_377_response$$inline_199$$ = $data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$.response, $data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$ = $data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$.errors;
      if($i$$inline_381_l$$inline_377_response$$inline_199$$ !== $JSCompiler_alias_VOID$$) {
        if($self$$7$$.$__recordName$ !== $JSCompiler_alias_NULL$$) {
          if($data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$ = $tuna$model$recordFactory$$.$__prototypes$[$self$$7$$.$__recordName$] || $JSCompiler_alias_NULL$$, $data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$ !== $JSCompiler_alias_NULL$$ && $i$$inline_381_l$$inline_377_response$$inline_199$$ !== $JSCompiler_alias_NULL$$) {
            var $l$$inline_382_record$$inline_374$$ = $JSCompiler_alias_NULL$$;
            if($i$$inline_381_l$$inline_377_response$$inline_199$$ instanceof Array) {
              for(var $message$$inline_385_message$$inline_431_result$$inline_375$$ = [], $JSCompiler_StaticMethods___showInputError$self$$inline_384_JSCompiler_StaticMethods_showErrorMessage$self$$inline_430_i$$inline_376$$ = 0, $i$$inline_381_l$$inline_377_response$$inline_199$$ = $i$$inline_381_l$$inline_377_response$$inline_199$$.length;$JSCompiler_StaticMethods___showInputError$self$$inline_384_JSCompiler_StaticMethods_showErrorMessage$self$$inline_430_i$$inline_376$$ < $i$$inline_381_l$$inline_377_response$$inline_199$$;) {
                $l$$inline_382_record$$inline_374$$ = $data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$.$clone$(), $message$$inline_385_message$$inline_431_result$$inline_375$$.push($l$$inline_382_record$$inline_374$$), $JSCompiler_StaticMethods___showInputError$self$$inline_384_JSCompiler_StaticMethods_showErrorMessage$self$$inline_430_i$$inline_376$$++
              }
              $i$$inline_381_l$$inline_377_response$$inline_199$$ = $message$$inline_385_message$$inline_431_result$$inline_375$$
            }else {
              $i$$inline_381_l$$inline_377_response$$inline_199$$ = $l$$inline_382_record$$inline_374$$ = $data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$.$clone$()
            }
          }else {
            $i$$inline_381_l$$inline_377_response$$inline_199$$ = $JSCompiler_alias_NULL$$
          }
        }
        $self$$7$$.$dispatch$("result", $i$$inline_381_l$$inline_377_response$$inline_199$$)
      }else {
        if($data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$ !== $JSCompiler_alias_VOID$$) {
          for(var $i$$inline_381_l$$inline_377_response$$inline_199$$ = 0, $l$$inline_382_record$$inline_374$$ = $data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$.length, $error$$inline_383_name$$inline_425$$ = $JSCompiler_alias_NULL$$;$i$$inline_381_l$$inline_377_response$$inline_199$$ < $l$$inline_382_record$$inline_374$$;) {
            $error$$inline_383_name$$inline_425$$ = $data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$[$i$$inline_381_l$$inline_377_response$$inline_199$$];
            if($error$$inline_383_name$$inline_425$$.param !== $JSCompiler_alias_VOID$$) {
              var $JSCompiler_StaticMethods___showInputError$self$$inline_384_JSCompiler_StaticMethods_showErrorMessage$self$$inline_430_i$$inline_376$$ = $self$$7$$, $message$$inline_385_message$$inline_431_result$$inline_375$$ = $error$$inline_383_name$$inline_425$$.message, $JSCompiler_StaticMethods___getFormInput$self$$inline_424_formInput$$inline_386$$;
              $JSCompiler_StaticMethods___getFormInput$self$$inline_424_formInput$$inline_386$$ = $JSCompiler_StaticMethods___showInputError$self$$inline_384_JSCompiler_StaticMethods_showErrorMessage$self$$inline_430_i$$inline_376$$;
              var $error$$inline_383_name$$inline_425$$ = $error$$inline_383_name$$inline_425$$.param, $result$$inline_426$$ = $JSCompiler_alias_NULL$$;
              if($JSCompiler_StaticMethods___getFormInput$self$$inline_424_formInput$$inline_386$$.$__inputTable$[$error$$inline_383_name$$inline_425$$] === $JSCompiler_alias_VOID$$) {
                var $input$$inline_428_inputWrapper$$inline_427$$ = $tuna$dom$selectOne$$(".j-" + $error$$inline_383_name$$inline_425$$ + "-input", $JSCompiler_StaticMethods___getFormInput$self$$inline_424_formInput$$inline_386$$.$_target$);
                $input$$inline_428_inputWrapper$$inline_427$$ !== $JSCompiler_alias_NULL$$ && ($input$$inline_428_inputWrapper$$inline_427$$ = new $tuna$ui$forms$FormInput$$($input$$inline_428_inputWrapper$$inline_427$$), $input$$inline_428_inputWrapper$$inline_427$$.$init$(), $JSCompiler_StaticMethods___getFormInput$self$$inline_424_formInput$$inline_386$$.$__inputTable$[$error$$inline_383_name$$inline_425$$] = $input$$inline_428_inputWrapper$$inline_427$$)
              }
              $JSCompiler_StaticMethods___getFormInput$self$$inline_424_formInput$$inline_386$$.$__inputTable$[$error$$inline_383_name$$inline_425$$] !== $JSCompiler_alias_VOID$$ && ($result$$inline_426$$ = $JSCompiler_StaticMethods___getFormInput$self$$inline_424_formInput$$inline_386$$.$__inputTable$[$error$$inline_383_name$$inline_425$$]);
              $JSCompiler_StaticMethods___getFormInput$self$$inline_424_formInput$$inline_386$$ = $result$$inline_426$$;
              $JSCompiler_StaticMethods___getFormInput$self$$inline_424_formInput$$inline_386$$ !== $JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods___showInputError$self$$inline_384_JSCompiler_StaticMethods_showErrorMessage$self$$inline_430_i$$inline_376$$ = $JSCompiler_StaticMethods___getFormInput$self$$inline_424_formInput$$inline_386$$, $tuna$dom$addClass$$($JSCompiler_StaticMethods___showInputError$self$$inline_384_JSCompiler_StaticMethods_showErrorMessage$self$$inline_430_i$$inline_376$$.$_target$, 
              "error"), $JSCompiler_StaticMethods___showInputError$self$$inline_384_JSCompiler_StaticMethods_showErrorMessage$self$$inline_430_i$$inline_376$$.$__message$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___showInputError$self$$inline_384_JSCompiler_StaticMethods_showErrorMessage$self$$inline_430_i$$inline_376$$.$__message$.innerHTML = $message$$inline_385_message$$inline_431_result$$inline_375$$)) : $JSCompiler_StaticMethods___showErrorMessage$$($JSCompiler_StaticMethods___showInputError$self$$inline_384_JSCompiler_StaticMethods_showErrorMessage$self$$inline_430_i$$inline_376$$, 
              $message$$inline_385_message$$inline_431_result$$inline_375$$)
            }else {
              $JSCompiler_StaticMethods___showErrorMessage$$($self$$7$$, $error$$inline_383_name$$inline_425$$.message)
            }
            $i$$inline_381_l$$inline_377_response$$inline_199$$++
          }
          $self$$7$$.$dispatch$("error", $data$$inline_198_errors$$inline_200_recordPrototype$$inline_373_response$$)
        }
      }
      window[$callbackInput$$.value] = $JSCompiler_alias_VOID$$
    }, $JSCompiler_StaticMethods___prepareTo$$($self$$7$$, $event$$21$$.type, $event$$21$$)) : $tuna$dom$preventDefault$$($event$$21$$)
  });
  $tuna$dom$addEventListener$$(this.$_target$, "reset", function($event$$22$$) {
    $self$$7$$.isEnabled() ? $JSCompiler_StaticMethods___prepareTo$$($self$$7$$, $event$$22$$.type, $event$$22$$) : $tuna$dom$preventDefault$$($event$$22$$)
  })
};
$tuna$ui$forms$Form$$.prototype.$getValue$ = function $$tuna$ui$forms$Form$$$$$getValue$$($element$$53_name$$75$$) {
  var $result$$13$$ = $JSCompiler_alias_NULL$$, $element$$53_name$$75$$ = this.$_target$.elements[$element$$53_name$$75$$];
  if($element$$53_name$$75$$ !== $JSCompiler_alias_VOID$$) {
    var $isCheck$$ = $JSCompiler_alias_FALSE$$;
    if($element$$53_name$$75$$.value === $JSCompiler_alias_VOID$$) {
      for(var $i$$34$$ = 0, $l$$23$$ = $element$$53_name$$75$$.length, $result$$13$$ = [];$i$$34$$ < $l$$23$$;) {
        $isCheck$$ = "checkbox" === $element$$53_name$$75$$[$i$$34$$].type || "radio" === $element$$53_name$$75$$[$i$$34$$].type, (!$isCheck$$ || $isCheck$$ && $element$$53_name$$75$$[$i$$34$$].checked) && $result$$13$$.push($element$$53_name$$75$$[$i$$34$$].value), $i$$34$$++
      }
    }else {
      if($isCheck$$ = "checkbox" === $element$$53_name$$75$$.type || "radio" === $element$$53_name$$75$$.type, !$isCheck$$ || $isCheck$$ && $element$$53_name$$75$$.checked) {
        $result$$13$$ = $element$$53_name$$75$$.value
      }
    }
  }
  return $result$$13$$
};
function $JSCompiler_StaticMethods___prepareTo$$($JSCompiler_StaticMethods___prepareTo$self$$, $JSCompiler_StaticMethods_cleanup$self$$inline_388_type$$77$$, $event$$23$$) {
  if($JSCompiler_StaticMethods___prepareTo$self$$.$dispatch$($JSCompiler_StaticMethods_cleanup$self$$inline_388_type$$77$$)) {
    $JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$.innerHTML = "", $tuna$dom$addClass$$($JSCompiler_StaticMethods___prepareTo$self$$.$__formMessage$, "hide"));
    for(var $name$$inline_205$$ in $JSCompiler_StaticMethods___prepareTo$self$$.$__inputTable$) {
      $JSCompiler_StaticMethods_cleanup$self$$inline_388_type$$77$$ = $JSCompiler_StaticMethods___prepareTo$self$$.$__inputTable$[$name$$inline_205$$], $tuna$dom$removeClass$$($JSCompiler_StaticMethods_cleanup$self$$inline_388_type$$77$$.$_target$, "error"), $JSCompiler_StaticMethods_cleanup$self$$inline_388_type$$77$$.$__message$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_cleanup$self$$inline_388_type$$77$$.$__message$.innerHTML = $JSCompiler_StaticMethods_cleanup$self$$inline_388_type$$77$$.$__defaultMessage$)
    }
  }else {
    $event$$23$$ !== $JSCompiler_alias_VOID$$ && $tuna$dom$preventDefault$$($event$$23$$)
  }
}
function $JSCompiler_StaticMethods___showErrorMessage$$($JSCompiler_StaticMethods___showErrorMessage$self$$, $message$$12$$) {
  $JSCompiler_StaticMethods___showErrorMessage$self$$.$__formMessage$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___showErrorMessage$self$$.$__formMessage$.innerHTML += $message$$12$$ + "<br />", $tuna$dom$removeClass$$($JSCompiler_StaticMethods___showErrorMessage$self$$.$__formMessage$, "hide"))
}
;function $tuna$ui$forms$FormInput$$($target$$54$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$54$$);
  this.$__message$ = $JSCompiler_alias_NULL$$;
  this.$__defaultMessage$ = ""
}
$tuna$utils$extend$$($tuna$ui$forms$FormInput$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$forms$FormInput$$.prototype.$init$ = function $$tuna$ui$forms$FormInput$$$$$init$$() {
  this.$__message$ = $tuna$dom$selectOne$$(".j-message", this.$_target$);
  this.$__message$ !== $JSCompiler_alias_NULL$$ && (this.$__defaultMessage$ = this.$__message$.innerHTML)
};
function $tuna$ui$forms$InputFilter$$($target$$55$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$55$$);
  this.$_input$ = this.$_currentData$ = this.$_data$ = $JSCompiler_alias_NULL$$;
  this.$_itemSerializeCallback$ = function $this$$_itemSerializeCallback$$($item$$3$$) {
    return $item$$3$$.name !== $JSCompiler_alias_VOID$$ ? "" + $item$$3$$.name : ""
  };
  this.$_transformer$ = new $tuna$ui$transformers$TemplateTransformer$$($target$$55$$)
}
$tuna$utils$extend$$($tuna$ui$forms$InputFilter$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$forms$InputFilter$$.prototype.$init$ = function $$tuna$ui$forms$InputFilter$$$$$init$$() {
  this.$_input$ = $tuna$dom$selectOne$$("input.j-filtration", this.$_target$);
  if(this.$_input$ !== $JSCompiler_alias_NULL$$) {
    var $self$$8$$ = this, $lastValue$$ = $JSCompiler_alias_NULL$$;
    $tuna$dom$addEventListener$$(this.$_input$, "keyup", function() {
      this.value !== $lastValue$$ && ($self$$8$$.filter(this.value), $lastValue$$ = this.value)
    })
  }
  this.$_transformer$.$init$()
};
$tuna$ui$forms$InputFilter$$.prototype.filter = function $$tuna$ui$forms$InputFilter$$$$filter$($term$$) {
  this.$_currentData$ = $JSCompiler_StaticMethods__filterData$$(this, $term$$);
  this.update()
};
$tuna$ui$forms$InputFilter$$.prototype.update = function $$tuna$ui$forms$InputFilter$$$$update$() {
  var $JSCompiler_StaticMethods_applyTransform$self$$inline_212_removedElements$$inline_392$$ = this.$_transformer$;
  $JSCompiler_StaticMethods_applyTransform$self$$inline_212_removedElements$$inline_392$$.$__template$.$applyData$(new $tuna$tmpl$data$DataNode$$(this.$_currentData$));
  if($JSCompiler_StaticMethods_applyTransform$self$$inline_212_removedElements$$inline_392$$.$__transformHandler$ !== $JSCompiler_alias_NULL$$) {
    for(var $JSCompiler_StaticMethods_handleTransformComplete$self$$inline_390$$ = $JSCompiler_StaticMethods_applyTransform$self$$inline_212_removedElements$$inline_392$$.$__transformHandler$, $createdElements$$inline_391$$ = $JSCompiler_StaticMethods_applyTransform$self$$inline_212_removedElements$$inline_392$$.$__template$.$__createdChildren$.splice(0, $JSCompiler_StaticMethods_applyTransform$self$$inline_212_removedElements$$inline_392$$.$__template$.$__createdChildren$.length), $JSCompiler_StaticMethods_applyTransform$self$$inline_212_removedElements$$inline_392$$ = 
    $JSCompiler_StaticMethods_applyTransform$self$$inline_212_removedElements$$inline_392$$.$__template$.$__removedChildren$.splice(0, $JSCompiler_StaticMethods_applyTransform$self$$inline_212_removedElements$$inline_392$$.$__template$.$__removedChildren$.length), $i$$inline_393$$ = 0, $l$$inline_394$$ = $createdElements$$inline_391$$.length;$i$$inline_393$$ < $l$$inline_394$$;) {
      $JSCompiler_StaticMethods_initModules$$($JSCompiler_StaticMethods_handleTransformComplete$self$$inline_390$$.$_container$, $createdElements$$inline_391$$[$i$$inline_393$$]), $i$$inline_393$$++
    }
    $i$$inline_393$$ = 0;
    for($l$$inline_394$$ = $JSCompiler_StaticMethods_applyTransform$self$$inline_212_removedElements$$inline_392$$.length;$i$$inline_393$$ < $l$$inline_394$$;) {
      $JSCompiler_StaticMethods_destroyModules$$($JSCompiler_StaticMethods_handleTransformComplete$self$$inline_390$$.$_container$, $JSCompiler_StaticMethods_applyTransform$self$$inline_212_removedElements$$inline_392$$[$i$$inline_393$$]), $i$$inline_393$$++
    }
  }
};
$tuna$ui$forms$InputFilter$$.prototype.clear = function $$tuna$ui$forms$InputFilter$$$$clear$() {
  this.$_input$.value = "";
  this.filter("")
};
function $JSCompiler_StaticMethods__filterData$$($JSCompiler_StaticMethods__filterData$self$$, $term$$1$$) {
  var $result$$15$$ = [];
  if(!$term$$1$$ || 0 === $term$$1$$.length) {
    $result$$15$$ = $JSCompiler_StaticMethods__filterData$self$$.$_data$.slice(0)
  }else {
    for(var $needle$$ = $term$$1$$.toUpperCase(), $i$$38$$ = 0, $l$$27$$ = $JSCompiler_StaticMethods__filterData$self$$.$_data$.length, $core$$ = $JSCompiler_alias_NULL$$;$i$$38$$ < $l$$27$$;) {
      $core$$ = $JSCompiler_StaticMethods__filterData$self$$.$_itemSerializeCallback$($JSCompiler_StaticMethods__filterData$self$$.$_data$[$i$$38$$]), -1 !== $core$$.toUpperCase().indexOf($needle$$) && $result$$15$$.push($JSCompiler_StaticMethods__filterData$self$$.$_data$[$i$$38$$]), $i$$38$$++
    }
  }
  return $result$$15$$
}
;function $tuna$ui$forms$Autocomplete$$($target$$56$$) {
  $tuna$ui$forms$InputFilter$$.call(this, $target$$56$$);
  this.$__selectedData$ = this.$__listBody$ = $JSCompiler_alias_NULL$$;
  this.$__selectionGroup$ = new $tuna$ui$selection$SelectionGroup$$($target$$56$$, $JSCompiler_alias_NULL$$)
}
$tuna$utils$extend$$($tuna$ui$forms$Autocomplete$$, $tuna$ui$forms$InputFilter$$);
$tuna$ui$forms$Autocomplete$$.prototype.$init$ = function $$tuna$ui$forms$Autocomplete$$$$$init$$() {
  $tuna$ui$forms$InputFilter$$.prototype.$init$.call(this);
  var $self$$9$$ = this;
  this.$__listBody$ = $tuna$dom$selectOne$$(".j-autocomplete-body", this.$_target$);
  if(this.$__listBody$ !== $JSCompiler_alias_NULL$$ && this.$_input$ !== $JSCompiler_alias_NULL$$) {
    var $isOpen$$ = $JSCompiler_alias_FALSE$$;
    $tuna$dom$addEventListener$$(this.$_input$, "focus", function() {
      $isOpen$$ || (document.body !== $JSCompiler_alias_NULL$$ && $tuna$dom$addOneEventListener$$(function() {
        var $value$$inline_216$$ = $self$$9$$.$_input$.value;
        $self$$9$$.$__selectedData$ = $JSCompiler_alias_NULL$$;
        var $dataItem$$inline_217$$ = $JSCompiler_StaticMethods__filterData$$($self$$9$$, $value$$inline_216$$).shift();
        $dataItem$$inline_217$$ !== $JSCompiler_alias_VOID$$ && $self$$9$$.$_itemSerializeCallback$($dataItem$$inline_217$$) === $value$$inline_216$$ && $JSCompiler_StaticMethods___selectData$$($self$$9$$, $dataItem$$inline_217$$);
        $self$$9$$.$__selectedData$ === $JSCompiler_alias_NULL$$ && $self$$9$$.clear();
        $tuna$dom$addClass$$($self$$9$$.$__listBody$, "hide");
        $isOpen$$ = $JSCompiler_alias_FALSE$$
      }), $self$$9$$.filter(""), $tuna$dom$removeClass$$($self$$9$$.$__listBody$, "hide"), $isOpen$$ = $JSCompiler_alias_TRUE$$)
    });
    $tuna$dom$addChildEventListener$$(this.$_target$, ".j-autocomplete-item", "click", function($event$$24$$) {
      var $index$$55$$ = $self$$9$$.$__selectionGroup$.$getItemIndex$(this);
      $index$$55$$ !== $JSCompiler_alias_NULL$$ ? $self$$9$$.$selectIndex$($index$$55$$) : $tuna$dom$stopPropagation$$($event$$24$$)
    });
    $tuna$dom$addEventListener$$(this.$_input$, "click", function($event$$25$$) {
      $tuna$dom$stopPropagation$$($event$$25$$)
    });
    $JSCompiler_StaticMethods_setOption$$(this.$__selectionGroup$, "item-selector", ".j-autocomplete-item");
    this.$__selectionGroup$.$init$()
  }
};
$tuna$ui$forms$Autocomplete$$.prototype.$selectIndex$ = function $$tuna$ui$forms$Autocomplete$$$$$selectIndex$$($index$$56$$) {
  0 < this.$_currentData$.length && $JSCompiler_StaticMethods___selectData$$(this, this.$_currentData$[$index$$56$$])
};
function $JSCompiler_StaticMethods___selectData$$($JSCompiler_StaticMethods___selectData$self$$, $dataItem$$1$$) {
  $JSCompiler_StaticMethods___selectData$self$$.$__selectedData$ !== $dataItem$$1$$ && ($JSCompiler_StaticMethods___selectData$self$$.$__selectedData$ = $dataItem$$1$$, $JSCompiler_StaticMethods___selectData$self$$.$_input$.value = $JSCompiler_StaticMethods___selectData$self$$.$_itemSerializeCallback$($dataItem$$1$$), $JSCompiler_StaticMethods___selectData$self$$.$dispatch$("change"))
}
$tuna$ui$forms$Autocomplete$$.prototype.$clearSelection$ = function $$tuna$ui$forms$Autocomplete$$$$$clearSelection$$() {
  this.$__selectedData$ !== $JSCompiler_alias_NULL$$ && (this.$__selectedData$ = $JSCompiler_alias_NULL$$, this.$dispatch$("change"))
};
$tuna$ui$forms$Autocomplete$$.prototype.update = function $$tuna$ui$forms$Autocomplete$$$$update$() {
  $tuna$ui$forms$InputFilter$$.prototype.update.call(this);
  this.$__selectionGroup$.$_selectionView$.update();
  this.$clearSelection$()
};
function $tuna$ui$transformers$TemplateTransformer$$($target$$57$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$57$$);
  this.$__transformHandler$ = this.$__template$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$transformers$TemplateTransformer$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$transformers$TemplateTransformer$$.prototype.$init$ = function $$tuna$ui$transformers$TemplateTransformer$$$$$init$$() {
  var $conditionCompiler$$inline_400_templateId$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "template-id");
  if($conditionCompiler$$inline_400_templateId$$ !== $JSCompiler_alias_NULL$$) {
    var $conditionExtractor$$inline_397_settings$$11$$;
    $tuna$tmpl$__settingsTable$$[$conditionCompiler$$inline_400_templateId$$] === $JSCompiler_alias_VOID$$ && ($tuna$tmpl$__markupBuilder$$ === $JSCompiler_alias_NULL$$ && ($tuna$tmpl$__markupBuilder$$ = new $tuna$tmpl$markup$MarkupTemplateBuilder$$, $JSCompiler_StaticMethods_addExtractor$$(new $tuna$tmpl$markup$SpotExtractor$$), $JSCompiler_StaticMethods_addExtractor$$(new $tuna$tmpl$markup$ListExtractor$$($tuna$tmpl$__markupBuilder$$)), $JSCompiler_StaticMethods_addExtractor$$(new $tuna$tmpl$markup$AttributeExtractor$$), 
    $JSCompiler_StaticMethods_addExtractor$$(new $tuna$tmpl$markup$CheckboxExtractor$$), $conditionExtractor$$inline_397_settings$$11$$ = new $tuna$tmpl$markup$ConditionExtractor$$, $conditionExtractor$$inline_397_settings$$11$$.$__actions$.push("class"), $conditionExtractor$$inline_397_settings$$11$$.$__operators$.push("isset"), $conditionExtractor$$inline_397_settings$$11$$.$__operators$.push("notset"), $conditionExtractor$$inline_397_settings$$11$$.$__operators$.push("eq"), $conditionExtractor$$inline_397_settings$$11$$.$__operators$.push("ne"), 
    $JSCompiler_StaticMethods_addExtractor$$($conditionExtractor$$inline_397_settings$$11$$)), $tuna$tmpl$__settingsTable$$[$conditionCompiler$$inline_400_templateId$$] = $JSCompiler_StaticMethods_buildSettings$$($tuna$tmpl$__markupBuilder$$, $conditionCompiler$$inline_400_templateId$$));
    $conditionExtractor$$inline_397_settings$$11$$ = $tuna$tmpl$__settingsTable$$[$conditionCompiler$$inline_400_templateId$$];
    if($conditionExtractor$$inline_397_settings$$11$$ !== $JSCompiler_alias_NULL$$) {
      $tuna$tmpl$__compiler$$ === $JSCompiler_alias_NULL$$ && ($tuna$tmpl$__compiler$$ = new $tuna$tmpl$compilers$TemplateCompiler$$, $tuna$tmpl$__compiler$$.$__itemCompilers$.spot = new $tuna$tmpl$compilers$SpotCompiler$$, $tuna$tmpl$__compiler$$.$__itemCompilers$.attribute = new $tuna$tmpl$compilers$AttributeCompiler$$, $tuna$tmpl$__compiler$$.$__itemCompilers$.checkbox = new $tuna$tmpl$compilers$CheckboxCompiler$$, $tuna$tmpl$__compiler$$.$__itemCompilers$.list = new $tuna$tmpl$compilers$ListCompiler$$($tuna$tmpl$__compiler$$), 
      $conditionCompiler$$inline_400_templateId$$ = new $tuna$tmpl$compilers$ConditionCompiler$$, $conditionCompiler$$inline_400_templateId$$.$__actions$["class"] = new $tuna$tmpl$units$condition$ClassAction$$, $conditionCompiler$$inline_400_templateId$$.$__operators$.isset = new $tuna$tmpl$units$condition$IsSetOperator$$, $conditionCompiler$$inline_400_templateId$$.$__operators$.notset = new $tuna$tmpl$units$condition$NotSetOperator$$, $conditionCompiler$$inline_400_templateId$$.$__operators$.eq = 
      new $tuna$tmpl$units$condition$EqualsOperator$$, $conditionCompiler$$inline_400_templateId$$.$__operators$.ne = new $tuna$tmpl$units$condition$NotEqualsOperator$$, $tuna$tmpl$__compiler$$.$__itemCompilers$.condition = $conditionCompiler$$inline_400_templateId$$), this.$__template$ = $tuna$tmpl$__compiler$$.compile($conditionExtractor$$inline_397_settings$$11$$, this.$_target$)
    }else {
      throw'Unknown template with id "' + $conditionCompiler$$inline_400_templateId$$ + '"';
    }
  }
};
$tuna$ui$transformers$TemplateTransformer$$.prototype.$destroy$ = function $$tuna$ui$transformers$TemplateTransformer$$$$$destroy$$() {
  this.$__template$.$destroy$();
  this.$__transformHandler$ = this.$__template$ = $JSCompiler_alias_NULL$$
};
function $tuna$ui$selection$AbstractSelectionGroup$$($target$$58$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$58$$);
  this.$_selectionRule$ = this.$_selectionView$ = this.$_itemsCollection$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$selection$AbstractSelectionGroup$$, $tuna$ui$ModuleInstance$$);
$JSCompiler_prototypeAlias$$ = $tuna$ui$selection$AbstractSelectionGroup$$.prototype;
$JSCompiler_prototypeAlias$$.$isIndexEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIndexEnabled$$($index$$63$$) {
  return this.$_selectionRule$.$isIndexEnabled$($index$$63$$)
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($item$$5$$) {
  return this.$_itemsCollection$.$getItemIndex$($item$$5$$)
};
$JSCompiler_prototypeAlias$$.$getItemAt$ = function $$JSCompiler_prototypeAlias$$$$getItemAt$$($index$$64$$) {
  return this.$_itemsCollection$.$getItemAt$($index$$64$$)
};
$JSCompiler_prototypeAlias$$.$getSelectedIndexes$ = function $$JSCompiler_prototypeAlias$$$$getSelectedIndexes$$() {
  return this.$_selectionRule$.$getSelectedIndexes$()
};
function $JSCompiler_StaticMethods_getLastSelectedIndex$$($JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$) {
  $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$ = $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$.$_selectionRule$.$getSelectedIndexes$();
  return 0 < $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$.length ? $JSCompiler_StaticMethods_getLastSelectedIndex$self_indexes$$.pop() : $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$selectIndex$ = function $$JSCompiler_prototypeAlias$$$$selectIndex$$($index$$65$$) {
  return this.$_selectionRule$.$selectIndex$($index$$65$$)
};
$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$() {
  this.$_selectionRule$.$clearSelection$()
};
function $tuna$ui$selection$SelectionGroup$$($target$$59$$, $indexAttribute$$) {
  $tuna$ui$selection$AbstractSelectionGroup$$.call(this, $target$$59$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "item-selector", ".j-selection-item");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "index-attribute", $indexAttribute$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "is-multiple", $JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "selection-class", "active");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "selection-event", "click")
}
$tuna$utils$extend$$($tuna$ui$selection$SelectionGroup$$, $tuna$ui$selection$AbstractSelectionGroup$$);
$tuna$ui$selection$SelectionGroup$$.prototype.$init$ = function $$tuna$ui$selection$SelectionGroup$$$$$init$$() {
  var $indexAttribute$$1$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "index-attribute");
  this.$_itemsCollection$ = $indexAttribute$$1$$ === $JSCompiler_alias_NULL$$ ? new $tuna$ui$selection$items$ElementsCollection$$ : new $tuna$ui$selection$items$NamedElementsCollection$$($indexAttribute$$1$$);
  this.$_selectionView$ = new $tuna$ui$selection$view$ClassSelectionView$$(this.$_target$);
  this.$_selectionRule$ = $JSCompiler_StaticMethods_getBooleanOption$$(this, "is-multiple") ? new $tuna$ui$selection$rule$MultipleSelectionRule$$ : new $tuna$ui$selection$rule$SingleSelectionRule$$;
  this.$_selectionView$.$_selectionClass$ = $JSCompiler_StaticMethods_getStringOption$$(this, "selection-class");
  this.$_selectionView$.$_itemSelector$ = $JSCompiler_StaticMethods_getStringOption$$(this, "item-selector");
  this.$_selectionView$.$_selectionRule$ = this.$_selectionRule$;
  this.$_selectionView$.$setItemsCollection$(this.$_itemsCollection$);
  this.$_selectionRule$.$_eventDispatcher$ = this;
  this.$_selectionRule$.$setItemsCollection$(this.$_itemsCollection$);
  this.$_selectionRule$.$_selectionView$ = this.$_selectionView$;
  this.$_selectionView$.update()
};
function $tuna$ui$selection$Navigation$$($target$$60$$) {
  $tuna$ui$ModuleInstance$$.call(this, $target$$60$$);
  this.$__navigationRule$ = $JSCompiler_alias_NULL$$;
  this.$__menuLinks$ = {};
  this.$__parent$ = $JSCompiler_alias_NULL$$;
  this.$__children$ = {};
  this.$__history$ = [];
  this.$__currentState$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "selection-class", "active");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "item-selector", ".j-navigation-page");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "menu-selector", ".j-navigation-menu")
}
$tuna$utils$extend$$($tuna$ui$selection$Navigation$$, $tuna$ui$ModuleInstance$$);
$tuna$ui$selection$Navigation$$.prototype.$init$ = function $$tuna$ui$selection$Navigation$$$$$init$$() {
  this.$__navigationRule$ = new $tuna$ui$selection$rule$NavigationSelectionRule$$;
  var $buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$ = new $tuna$ui$selection$items$NamedElementsCollection$$("data-name"), $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$ = new $tuna$ui$selection$view$ClassSelectionView$$(this.$_target$), $className$$inline_403_l$$inline_248_selector$$inline_406$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "selection-class");
  $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$.$_selectionClass$ = $className$$inline_403_l$$inline_248_selector$$inline_406$$;
  $className$$inline_403_l$$inline_248_selector$$inline_406$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "item-selector");
  $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$.$_itemSelector$ = $className$$inline_403_l$$inline_248_selector$$inline_406$$;
  $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$.$_selectionRule$ = this.$__navigationRule$;
  $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$.$setItemsCollection$($buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$);
  this.$__navigationRule$.$_eventDispatcher$ = this;
  this.$__navigationRule$.$_selectionView$ = $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$;
  this.$__navigationRule$.$setItemsCollection$($buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$);
  this.$__navigationRule$.$setNavigation$(this);
  $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$.update();
  $JSCompiler_StaticMethods___initControls$$(this);
  $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "menu-selector");
  $buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "button-selector");
  if($i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$ !== $JSCompiler_alias_NULL$$ && $buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$ !== $JSCompiler_alias_NULL$$ && ($i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$ = $tuna$dom$selectOne$$($i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$, this.$_target$), $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$ !== 
  $JSCompiler_alias_NULL$$)) {
    for(var $buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$ = $tuna$dom$select$$($buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$, $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$), $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$ = 0, $className$$inline_403_l$$inline_248_selector$$inline_406$$ = $buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$.length, 
    $href$$inline_249_index$$inline_250$$ = $JSCompiler_alias_NULL$$, $button$$inline_251$$ = $href$$inline_249_index$$inline_250$$ = $JSCompiler_alias_NULL$$;$i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$ < $className$$inline_403_l$$inline_248_selector$$inline_406$$;) {
      $button$$inline_251$$ = $tuna$ui$buttons$create$$($buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$[$i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$]), $href$$inline_249_index$$inline_250$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$inline_251$$, "href"), $href$$inline_249_index$$inline_250$$ !== $JSCompiler_alias_NULL$$ && ($href$$inline_249_index$$inline_250$$ = $href$$inline_249_index$$inline_250$$.split("/").shift(), 
      this.$__menuLinks$[$href$$inline_249_index$$inline_250$$] === $JSCompiler_alias_VOID$$ && (this.$__menuLinks$[$href$$inline_249_index$$inline_250$$] = []), this.$__menuLinks$[$href$$inline_249_index$$inline_250$$].push($button$$inline_251$$)), $i$$inline_247_menu$$inline_245_menuSelector$$inline_243_selectionView$$inline_240$$++
    }
  }
  $buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$ = this.$__navigationRule$.$__currentIndex$;
  $buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$ !== $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods___updateMenu$$(this, $buttonSelector$$inline_244_buttons$$inline_246_currentIndex$$inline_252_itemsCollection$$inline_239$$, $JSCompiler_alias_TRUE$$)
};
function $JSCompiler_StaticMethods___initControls$$($JSCompiler_StaticMethods___initControls$self$$) {
  var $controls$$ = new $tuna$ui$buttons$ButtonGroup$$($JSCompiler_StaticMethods___initControls$self$$.$_target$);
  $JSCompiler_StaticMethods_setOption$$($controls$$, "button-selector", ".j-navigation-link");
  $controls$$.$__defaultAction$ = "navigate";
  $controls$$.addEventListener("navigate", function($event$$26$$, $button$$2$$) {
    $event$$26$$.preventDefault();
    var $index$$67$$ = $JSCompiler_StaticMethods_getStringOption$$($button$$2$$, "href");
    if($index$$67$$ !== $JSCompiler_alias_NULL$$) {
      for(var $result$$inline_418$$ = {}, $attrs$$inline_419$$ = $button$$2$$.$_target$.attributes, $i$$inline_420$$ = 0, $l$$inline_421$$ = $attrs$$inline_419$$.length;$i$$inline_420$$ < $l$$inline_421$$;) {
        0 === $attrs$$inline_419$$[$i$$inline_420$$].name.indexOf("data-") && ($result$$inline_418$$[$attrs$$inline_419$$[$i$$inline_420$$].name.substr(5)] = $attrs$$inline_419$$[$i$$inline_420$$].value), $i$$inline_420$$++
      }
      delete $result$$inline_418$$.href;
      $JSCompiler_StaticMethods___initControls$self$$.navigate($index$$67$$, $result$$inline_418$$)
    }
  });
  $controls$$.addEventListener("back", function($event$$27$$) {
    $event$$27$$.preventDefault();
    $JSCompiler_StaticMethods___initControls$self$$.back()
  });
  $controls$$.$init$()
}
function $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$, $i$$41_path$$9$$, $isSelected$$) {
  if($i$$41_path$$9$$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$ = $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$.$__menuLinks$[$i$$41_path$$9$$], $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$ !== $JSCompiler_alias_VOID$$)) {
    for(var $i$$41_path$$9$$ = 0, $l$$30$$ = $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$.length;$i$$41_path$$9$$ < $l$$30$$;) {
      $JSCompiler_StaticMethods___updateMenu$self_buttons$$1$$[$i$$41_path$$9$$].setActive($isSelected$$), $i$$41_path$$9$$++
    }
  }
}
function $JSCompiler_StaticMethods_getPathDesc$$($JSCompiler_StaticMethods_getPathDesc$self$$) {
  var $result$$17$$ = [], $index$$69$$ = $JSCompiler_StaticMethods_getPathDesc$self$$.$__navigationRule$.$__currentIndex$;
  $index$$69$$ !== $JSCompiler_alias_NULL$$ && ($result$$17$$.push($index$$69$$), $JSCompiler_StaticMethods_getPathDesc$self$$.$__children$[$index$$69$$] !== $JSCompiler_alias_VOID$$ && ($result$$17$$ = $result$$17$$.concat($JSCompiler_StaticMethods_getPathDesc$$($JSCompiler_StaticMethods_getPathDesc$self$$.$__children$[$index$$69$$]))));
  return $result$$17$$
}
function $JSCompiler_StaticMethods_getRelatedPath$$($JSCompiler_StaticMethods_getRelatedPath$self$$) {
  var $result$$18$$ = [];
  $JSCompiler_StaticMethods_getRelatedPath$self$$.$__parent$ !== $JSCompiler_alias_NULL$$ && ($result$$18$$.push($JSCompiler_StaticMethods_getRelatedPath$self$$.getName()), $result$$18$$ = $JSCompiler_StaticMethods_getRelatedPath$$($JSCompiler_StaticMethods_getRelatedPath$self$$.$__parent$).concat($result$$18$$));
  return $result$$18$$
}
$tuna$ui$selection$Navigation$$.prototype.$getRoot$ = function $$tuna$ui$selection$Navigation$$$$$getRoot$$() {
  return this.$__parent$ === $JSCompiler_alias_NULL$$ ? this : this.$__parent$.$getRoot$()
};
$tuna$ui$selection$Navigation$$.prototype.back = function $$tuna$ui$selection$Navigation$$$$back$() {
  this.$__parent$ === $JSCompiler_alias_NULL$$ ? 0 < this.$__history$.length && (this.$__currentState$ = this.$__history$.pop(), $JSCompiler_StaticMethods_navigatePath$$(this, this.$__currentState$.$__path$.slice(0), this.$__currentState$.getData())) : this.$getRoot$().back()
};
$tuna$ui$selection$Navigation$$.prototype.navigate = function $$tuna$ui$selection$Navigation$$$$navigate$($path$$10$$, $data$$33$$) {
  if($path$$10$$ instanceof Array) {
    this.$__parent$ === $JSCompiler_alias_NULL$$ ? (this.$__currentState$ === $JSCompiler_alias_NULL$$ && (this.$__currentState$ = new $NavigationState$$($JSCompiler_StaticMethods_getPathDesc$$(this))), $JSCompiler_StaticMethods_navigatePath$$(this, $path$$10$$, $data$$33$$), this.$__history$.push(this.$__currentState$), this.$__currentState$ = new $NavigationState$$($JSCompiler_StaticMethods_getPathDesc$$(this), $data$$33$$)) : $JSCompiler_StaticMethods_navigatePath$$(this, $path$$10$$, $data$$33$$)
  }else {
    var $parsedPath$$ = $path$$10$$.split("/");
    0 !== $path$$10$$.indexOf("/") && ($parsedPath$$ = $JSCompiler_StaticMethods_getRelatedPath$$(this).concat($parsedPath$$));
    this.$getRoot$().navigate($parsedPath$$, $data$$33$$)
  }
};
function $JSCompiler_StaticMethods_navigatePath$$($JSCompiler_StaticMethods_navigatePath$self$$, $path$$11$$, $data$$34$$) {
  for(var $index$$70$$ = $path$$11$$.shift();"" === $index$$70$$ && 0 < $path$$11$$.length;) {
    $index$$70$$ = $path$$11$$.shift()
  }
  $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods_navigatePath$self$$, $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.$__currentIndex$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.navigate($index$$70$$, $data$$34$$ || $JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods___updateMenu$$($JSCompiler_StaticMethods_navigatePath$self$$, $JSCompiler_StaticMethods_navigatePath$self$$.$__navigationRule$.$__currentIndex$, $JSCompiler_alias_TRUE$$);
  if($JSCompiler_StaticMethods_navigatePath$self$$.$__children$[$index$$70$$] !== $JSCompiler_alias_VOID$$) {
    return $JSCompiler_StaticMethods_navigatePath$$($JSCompiler_StaticMethods_navigatePath$self$$.$__children$[$index$$70$$], $path$$11$$, $data$$34$$)
  }
}
function $NavigationState$$($path$$12$$, $data$$35$$) {
  this.$__path$ = $path$$12$$;
  this.$__data$ = $data$$35$$ || $JSCompiler_alias_NULL$$
}
$NavigationState$$.prototype.getData = $JSCompiler_get$$("$__data$");
function $tuna$ui$selection$Carousel$$($target$$61$$) {
  $tuna$ui$selection$SelectionGroup$$.call(this, $target$$61$$, $JSCompiler_alias_NULL$$);
  this.$__shiftIndex$ = -1;
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "item-selector", ".j-carousel-item");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "next-button-selector", ".j-carousel-next");
  $JSCompiler_StaticMethods__setDefaultOption$$(this, "back-button-selector", ".j-carousel-back")
}
$tuna$utils$extend$$($tuna$ui$selection$Carousel$$, $tuna$ui$selection$SelectionGroup$$);
$tuna$ui$selection$Carousel$$.prototype.$init$ = function $$tuna$ui$selection$Carousel$$$$$init$$() {
  $tuna$ui$selection$SelectionGroup$$.prototype.$init$.call(this);
  var $self$$11$$ = this;
  this.$__shiftIndex$ = Number($JSCompiler_StaticMethods_getLastSelectedIndex$$(this));
  var $backButtonSelector_nextButtonSelector$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "next-button-selector");
  $backButtonSelector_nextButtonSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$(this.$_target$, $backButtonSelector_nextButtonSelector$$, "click", function($event$$28$$) {
    $tuna$dom$preventDefault$$($event$$28$$);
    $self$$11$$.next()
  });
  $backButtonSelector_nextButtonSelector$$ = $JSCompiler_StaticMethods_getStringOption$$(this, "back-button-selector");
  $backButtonSelector_nextButtonSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$(this.$_target$, $backButtonSelector_nextButtonSelector$$, "click", function($event$$29$$) {
    $tuna$dom$preventDefault$$($event$$29$$);
    $self$$11$$.back()
  })
};
$tuna$ui$selection$Carousel$$.prototype.next = function $$tuna$ui$selection$Carousel$$$$next$() {
  this.$__shiftIndex$++;
  this.$getItemAt$(this.$__shiftIndex$) === $JSCompiler_alias_NULL$$ && (this.$__shiftIndex$ = 0);
  this.$selectIndex$(this.$__shiftIndex$)
};
$tuna$ui$selection$Carousel$$.prototype.back = function $$tuna$ui$selection$Carousel$$$$back$() {
  this.$__shiftIndex$--;
  this.$getItemAt$(this.$__shiftIndex$) === $JSCompiler_alias_NULL$$ && (this.$__shiftIndex$ = this.$_itemsCollection$.$getItemsCount$() - 1);
  this.$selectIndex$(this.$__shiftIndex$)
};
function $tuna$ui$selection$items$ElementsCollection$$() {
  this.$__items$ = []
}
$JSCompiler_prototypeAlias$$ = $tuna$ui$selection$items$ElementsCollection$$.prototype;
$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$8$$) {
  return this.$__items$.push($item$$8$$) - 1
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($item$$9$$) {
  return $tuna$utils$indexOf$$($item$$9$$, this.$__items$)
};
$JSCompiler_prototypeAlias$$.$getItemAt$ = function $$JSCompiler_prototypeAlias$$$$getItemAt$$($index$$72$$) {
  return this.$__items$[$index$$72$$] || $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$__items$.length = 0
};
$JSCompiler_prototypeAlias$$.$getItemsCount$ = function $$JSCompiler_prototypeAlias$$$$getItemsCount$$() {
  return this.$__items$.length
};
function $tuna$ui$selection$items$NamedElementsCollection$$($indexAttribute$$2$$) {
  this.$__indexAttribute$ = $indexAttribute$$2$$;
  this.$__items$ = {}
}
$JSCompiler_prototypeAlias$$ = $tuna$ui$selection$items$NamedElementsCollection$$.prototype;
$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$10$$) {
  var $index$$73$$ = $item$$10$$.getAttribute(this.$__indexAttribute$);
  $index$$73$$ !== $JSCompiler_alias_NULL$$ && (this.$__items$[$index$$73$$] = $item$$10$$);
  return $index$$73$$
};
$JSCompiler_prototypeAlias$$.$getItemIndex$ = function $$JSCompiler_prototypeAlias$$$$getItemIndex$$($index$$74_item$$11$$) {
  $index$$74_item$$11$$ = $index$$74_item$$11$$.getAttribute(this.$__indexAttribute$);
  return $index$$74_item$$11$$ !== $JSCompiler_alias_NULL$$ && this.$__items$[$index$$74_item$$11$$] !== $JSCompiler_alias_VOID$$ ? $index$$74_item$$11$$ : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getItemAt$ = function $$JSCompiler_prototypeAlias$$$$getItemAt$$($index$$75$$) {
  return this.$__items$[$index$$75$$] || $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$__items$ = {}
};
$JSCompiler_prototypeAlias$$.$getItemsCount$ = function $$JSCompiler_prototypeAlias$$$$getItemsCount$$() {
  var $i$$43$$ = 0, $_$$;
  for($_$$ in this.$__items$) {
    $i$$43$$++
  }
  return $i$$43$$
};
function $tuna$ui$selection$rule$AbstractSelectionRule$$() {
  this.$_eventDispatcher$ = this.$_selectionView$ = this.$_itemsCollection$ = $JSCompiler_alias_NULL$$;
  this.$_disabledIndexes$ = []
}
$JSCompiler_prototypeAlias$$ = $tuna$ui$selection$rule$AbstractSelectionRule$$.prototype;
$JSCompiler_prototypeAlias$$.$setItemsCollection$ = function $$JSCompiler_prototypeAlias$$$$setItemsCollection$$($collection$$) {
  this.$_itemsCollection$ = $collection$$
};
$JSCompiler_prototypeAlias$$.$getSelectedIndexes$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$selectIndex$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$clearSelection$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$isIndexEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIndexEnabled$$($index$$84$$) {
  return this.$_itemsCollection$.$getItemAt$($index$$84$$) !== $JSCompiler_alias_NULL$$ && -1 === $tuna$utils$indexOf$$($index$$84$$, this.$_disabledIndexes$)
};
function $tuna$ui$selection$rule$SingleSelectionRule$$() {
  $tuna$ui$selection$rule$AbstractSelectionRule$$.call(this);
  this.$__currentIndex$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$selection$rule$SingleSelectionRule$$, $tuna$ui$selection$rule$AbstractSelectionRule$$);
$tuna$ui$selection$rule$SingleSelectionRule$$.prototype.$getSelectedIndexes$ = function $$tuna$ui$selection$rule$SingleSelectionRule$$$$$getSelectedIndexes$$() {
  return this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ ? [this.$__currentIndex$] : []
};
$tuna$ui$selection$rule$SingleSelectionRule$$.prototype.$selectIndex$ = function $$tuna$ui$selection$rule$SingleSelectionRule$$$$$selectIndex$$($index$$85$$) {
  var $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_273$$;
  if($JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_273$$ = this.$isIndexEnabled$($index$$85$$)) {
    if($JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_273$$ = this.$__currentIndex$ !== $index$$85$$) {
      $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_273$$ = this.$__currentIndex$, $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_273$$ = ($JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_273$$ === $JSCompiler_alias_NULL$$ || this.$_eventDispatcher$.$dispatch$("deselect", $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_273$$)) && this.$_eventDispatcher$.$dispatch$("select", $index$$85$$)
    }
  }
  return $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_273$$ ? ($JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_273$$ = this.$__currentIndex$, this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$_selectionView$.$applySelectionAt$($index$$85$$), this.$__currentIndex$ = $index$$85$$, $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_273$$ !== $JSCompiler_alias_NULL$$ && this.$_eventDispatcher$.$dispatch$("deselected", 
  $JSCompiler_temp$$10_JSCompiler_temp$$9_oldIndex_oldIndex$$inline_273$$), this.$_eventDispatcher$.$dispatch$("selected", $index$$85$$), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$tuna$ui$selection$rule$SingleSelectionRule$$.prototype.$clearSelection$ = function $$tuna$ui$selection$rule$SingleSelectionRule$$$$$clearSelection$$() {
  this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && (this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$__currentIndex$ = $JSCompiler_alias_NULL$$)
};
function $tuna$ui$selection$rule$MultipleSelectionRule$$() {
  $tuna$ui$selection$rule$AbstractSelectionRule$$.call(this);
  this.$__selectedIndexes$ = []
}
$tuna$utils$extend$$($tuna$ui$selection$rule$MultipleSelectionRule$$, $tuna$ui$selection$rule$AbstractSelectionRule$$);
$tuna$ui$selection$rule$MultipleSelectionRule$$.prototype.$getSelectedIndexes$ = function $$tuna$ui$selection$rule$MultipleSelectionRule$$$$$getSelectedIndexes$$() {
  return this.$__selectedIndexes$.slice(0)
};
$tuna$ui$selection$rule$MultipleSelectionRule$$.prototype.$selectIndex$ = function $$tuna$ui$selection$rule$MultipleSelectionRule$$$$$selectIndex$$($index$$87$$) {
  if(this.$isIndexEnabled$($index$$87$$)) {
    var $indexPosition$$1$$ = $tuna$utils$indexOf$$($index$$87$$, this.$__selectedIndexes$);
    if(-1 === $indexPosition$$1$$) {
      if(this.$_eventDispatcher$.$dispatch$("select", $index$$87$$)) {
        return this.$_selectionView$.$applySelectionAt$($index$$87$$), this.$__selectedIndexes$.push($index$$87$$), $JSCompiler_alias_TRUE$$
      }
    }else {
      if(this.$_eventDispatcher$.$dispatch$("deselect", $index$$87$$)) {
        return this.$_selectionView$.$destroySelectionAt$($index$$87$$), this.$__selectedIndexes$.splice($indexPosition$$1$$, 1), $JSCompiler_alias_TRUE$$
      }
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$tuna$ui$selection$rule$MultipleSelectionRule$$.prototype.$clearSelection$ = function $$tuna$ui$selection$rule$MultipleSelectionRule$$$$$clearSelection$$() {
  for(;0 < this.$__selectedIndexes$.length;) {
    this.$_selectionView$.$destroySelectionAt$(this.$__selectedIndexes$.shift())
  }
};
function $tuna$ui$selection$rule$NavigationSelectionRule$$() {
  $tuna$ui$selection$rule$AbstractSelectionRule$$.call(this);
  this.$__openData$ = this.$__navigation$ = this.$__currentController$ = this.$__currentIndex$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$selection$rule$NavigationSelectionRule$$, $tuna$ui$selection$rule$AbstractSelectionRule$$);
$JSCompiler_prototypeAlias$$ = $tuna$ui$selection$rule$NavigationSelectionRule$$.prototype;
$JSCompiler_prototypeAlias$$.$setNavigation$ = function $$JSCompiler_prototypeAlias$$$$setNavigation$$($navigation$$2$$) {
  this.$__navigation$ = $navigation$$2$$
};
$JSCompiler_prototypeAlias$$.$getSelectedIndexes$ = function $$JSCompiler_prototypeAlias$$$$getSelectedIndexes$$() {
  return this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ ? [this.$__currentIndex$] : []
};
$JSCompiler_prototypeAlias$$.navigate = function $$JSCompiler_prototypeAlias$$$navigate$($index$$89$$, $data$$36$$) {
  this.$__openData$ = $data$$36$$;
  return this.$selectIndex$($index$$89$$)
};
$JSCompiler_prototypeAlias$$.$selectIndex$ = function $$JSCompiler_prototypeAlias$$$$selectIndex$$($index$$90_page$$inline_276$$) {
  return this.$isIndexEnabled$($index$$90_page$$inline_276$$) && this.$__currentIndex$ !== $index$$90_page$$inline_276$$ ? (this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && (this.$__currentController$ instanceof $tuna$control$PageViewController$$ && this.$__currentController$ instanceof $tuna$control$PageViewController$$ && this.$__currentController$.close(), this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$_eventDispatcher$.$dispatch$("close", this.$__currentIndex$)), 
  this.$__currentIndex$ = $index$$90_page$$inline_276$$, this.$__currentController$ = $JSCompiler_alias_NULL$$, this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && ($index$$90_page$$inline_276$$ = this.$_itemsCollection$.$getItemAt$(this.$__currentIndex$), $index$$90_page$$inline_276$$ !== $JSCompiler_alias_NULL$$ && (this.$__currentController$ = $tuna$control$__controllerTable$$[$index$$90_page$$inline_276$$.id] !== $JSCompiler_alias_VOID$$ ? $tuna$control$__controllerTable$$[$index$$90_page$$inline_276$$.id] : 
  $JSCompiler_alias_NULL$$, this.$__currentController$ !== $JSCompiler_alias_NULL$$ && !this.$__currentController$.$isActive$() && (this.$__currentController$ instanceof $tuna$control$PageViewController$$ && this.$__currentController$.$setNavigation$(this.$__navigation$), this.$__currentController$.$init$($index$$90_page$$inline_276$$)))), this.$_selectionView$.$applySelectionAt$(this.$__currentIndex$), this.$_eventDispatcher$.$dispatch$("open", this.$__currentIndex$), this.$__currentController$ !== 
  $JSCompiler_alias_NULL$$ && this.$__currentController$ instanceof $tuna$control$PageViewController$$ && this.$__currentController$.open(this.$__openData$), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$() {
  this.$__currentIndex$ !== $JSCompiler_alias_NULL$$ && (this.$_selectionView$.$destroySelectionAt$(this.$__currentIndex$), this.$__currentIndex$ = $JSCompiler_alias_NULL$$)
};
function $tuna$ui$selection$view$AbstractSelectionView$$() {
  this.$_selectionRule$ = this.$_itemsCollection$ = $JSCompiler_alias_NULL$$
}
$tuna$ui$selection$view$AbstractSelectionView$$.prototype.$setItemsCollection$ = function $$tuna$ui$selection$view$AbstractSelectionView$$$$$setItemsCollection$$($collection$$1$$) {
  this.$_itemsCollection$ = $collection$$1$$
};
$tuna$ui$selection$view$AbstractSelectionView$$.prototype.$applySelectionAt$ = $JSCompiler_emptyFn$$();
$tuna$ui$selection$view$AbstractSelectionView$$.prototype.$destroySelectionAt$ = $JSCompiler_emptyFn$$();
$tuna$ui$selection$view$AbstractSelectionView$$.prototype.update = $JSCompiler_emptyFn$$();
function $tuna$ui$selection$view$ClassSelectionView$$($target$$62$$) {
  $tuna$ui$selection$view$AbstractSelectionView$$.call(this);
  this.$_target$ = $target$$62$$;
  this.$_selectionClass$ = this.$_itemSelector$ = $JSCompiler_alias_NULL$$
}
$tuna$utils$extend$$($tuna$ui$selection$view$ClassSelectionView$$, $tuna$ui$selection$view$AbstractSelectionView$$);
$tuna$ui$selection$view$ClassSelectionView$$.prototype.$applySelectionAt$ = function $$tuna$ui$selection$view$ClassSelectionView$$$$$applySelectionAt$$($index$$100_item$$12$$) {
  $index$$100_item$$12$$ = this.$_itemsCollection$.$getItemAt$($index$$100_item$$12$$);
  $index$$100_item$$12$$ !== $JSCompiler_alias_NULL$$ && this.$_selectionClass$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addClass$$($index$$100_item$$12$$, this.$_selectionClass$)
};
$tuna$ui$selection$view$ClassSelectionView$$.prototype.$destroySelectionAt$ = function $$tuna$ui$selection$view$ClassSelectionView$$$$$destroySelectionAt$$($index$$101_item$$13$$) {
  $index$$101_item$$13$$ = this.$_itemsCollection$.$getItemAt$($index$$101_item$$13$$);
  $index$$101_item$$13$$ !== $JSCompiler_alias_NULL$$ && this.$_selectionClass$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$removeClass$$($index$$101_item$$13$$, this.$_selectionClass$)
};
$tuna$ui$selection$view$ClassSelectionView$$.prototype.update = function $$tuna$ui$selection$view$ClassSelectionView$$$$update$() {
  if(this.$_itemSelector$ !== $JSCompiler_alias_NULL$$) {
    this.$_selectionRule$.$clearSelection$();
    this.$_itemsCollection$.clear();
    for(var $possibleItems$$ = $tuna$dom$select$$(this.$_itemSelector$, this.$_target$), $i$$44$$ = 0, $l$$32$$ = $possibleItems$$.length, $index$$104$$ = $JSCompiler_alias_NULL$$, $item$$16$$ = $JSCompiler_alias_NULL$$;$i$$44$$ < $l$$32$$;) {
      $item$$16$$ = $possibleItems$$[$i$$44$$], $tuna$dom$getParentMatches$$($item$$16$$, this.$_itemSelector$, this.$_target$) === $JSCompiler_alias_NULL$$ && ($index$$104$$ = this.$_itemsCollection$.$addItem$($item$$16$$), $index$$104$$ !== $JSCompiler_alias_NULL$$ && this.$_selectionClass$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$hasClass$$($item$$16$$, this.$_selectionClass$) && this.$_selectionRule$.$selectIndex$($index$$104$$)), $i$$44$$++
    }
  }
};
var $tuna$control$__controllerTable$$ = {}, $tuna$control$__mainController$$ = $JSCompiler_alias_NULL$$;
function $tuna$control$ViewController$$() {
  this.$_container$ = $JSCompiler_alias_NULL$$;
  this.$_modules$ = []
}
$tuna$control$ViewController$$.prototype.$isActive$ = function $$tuna$control$ViewController$$$$$isActive$$() {
  return this.$_container$ !== $JSCompiler_alias_NULL$$ && this.$_container$.$isActive$()
};
$tuna$control$ViewController$$.prototype.$init$ = function $$tuna$control$ViewController$$$$$init$$($target$$64$$) {
  this.$destroy$();
  this.$_container$ = new $tuna$ui$ModuleContainer$$($target$$64$$);
  this.$_container$.$__modules$ = this.$_modules$;
  $JSCompiler_StaticMethods_initModules$$(this.$_container$)
};
$tuna$control$ViewController$$.prototype.$destroy$ = function $$tuna$control$ViewController$$$$$destroy$$() {
  this.$_container$ !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_destroyModules$$(this.$_container$), this.$_container$ = $JSCompiler_alias_NULL$$)
};
function $tuna$control$PageViewController$$() {
  $tuna$control$ViewController$$.call(this)
}
$tuna$utils$extend$$($tuna$control$PageViewController$$, $tuna$control$ViewController$$);
$tuna$control$PageViewController$$.prototype.$setNavigation$ = $JSCompiler_emptyFn$$();
$tuna$control$PageViewController$$.prototype.close = $JSCompiler_emptyFn$$();
$tuna$control$PageViewController$$.prototype.open = $JSCompiler_emptyFn$$();
function $NavigationModule$$() {
  this.$_selector$ = ".j-navigation"
}
$tuna$utils$extend$$($NavigationModule$$, $tuna$ui$Module$$);
$NavigationModule$$.prototype.$initInstance$ = function $$NavigationModule$$$$$initInstance$$($target$$65$$) {
  return new $tuna$ui$selection$Navigation$$($target$$65$$)
};
$tuna$ui$__typeTable$$.navigation = new $NavigationModule$$;
function $PopupModule$$() {
  this.$_selector$ = ".j-popup"
}
$tuna$utils$extend$$($PopupModule$$, $tuna$ui$Module$$);
$PopupModule$$.prototype.$initInstance$ = function $$PopupModule$$$$$initInstance$$($target$$66$$) {
  return $tuna$ui$popups$create$$($target$$66$$)
};
$tuna$ui$__typeTable$$.popup = new $PopupModule$$;
function $ButtonModule$$() {
  this.$_selector$ = ".j-button"
}
$tuna$utils$extend$$($ButtonModule$$, $tuna$ui$Module$$);
$ButtonModule$$.prototype.$initInstance$ = function $$ButtonModule$$$$$initInstance$$($target$$67$$) {
  return $tuna$ui$buttons$create$$($target$$67$$)
};
$tuna$ui$__typeTable$$.button = new $ButtonModule$$;
function $PopupButtonModule$$() {
  this.$_selector$ = ".j-popup-button"
}
$tuna$utils$extend$$($PopupButtonModule$$, $tuna$ui$Module$$);
$PopupButtonModule$$.prototype.$initInstance$ = function $$PopupButtonModule$$$$$initInstance$$($target$$68$$) {
  return new $tuna$ui$buttons$PopupButton$$($target$$68$$)
};
$tuna$ui$__typeTable$$["popup-button"] = new $PopupButtonModule$$;
function $SelectionGroupModule$$() {
  this.$_selector$ = ".j-selection-group"
}
$tuna$utils$extend$$($SelectionGroupModule$$, $tuna$ui$Module$$);
$SelectionGroupModule$$.prototype.$initInstance$ = function $$SelectionGroupModule$$$$$initInstance$$($target$$69$$) {
  var $selectionGroup$$ = new $tuna$ui$selection$SelectionGroup$$($target$$69$$, $JSCompiler_alias_NULL$$), $selectionEvent$$ = $JSCompiler_StaticMethods_getStringOption$$($selectionGroup$$, "selection-event"), $itemSelector$$ = $JSCompiler_StaticMethods_getStringOption$$($selectionGroup$$, "item-selector");
  $selectionEvent$$ !== $JSCompiler_alias_NULL$$ && $itemSelector$$ !== $JSCompiler_alias_NULL$$ && $tuna$dom$addChildEventListener$$($target$$69$$, $itemSelector$$, $selectionEvent$$, function() {
    var $index$$106$$ = $selectionGroup$$.$getItemIndex$(this);
    $index$$106$$ !== $JSCompiler_alias_NULL$$ && $selectionGroup$$.$selectIndex$($index$$106$$)
  });
  return $selectionGroup$$
};
$tuna$ui$__typeTable$$["selection-group"] = new $SelectionGroupModule$$;
function $TemplateTransformerModule$$() {
  this.$_selector$ = ".j-template-transformer"
}
$tuna$utils$extend$$($TemplateTransformerModule$$, $tuna$ui$Module$$);
$TemplateTransformerModule$$.prototype.$initInstance$ = function $$TemplateTransformerModule$$$$$initInstance$$($target$$70$$) {
  return new $tuna$ui$transformers$TemplateTransformer$$($target$$70$$)
};
$tuna$ui$__typeTable$$["template-transformer"] = new $TemplateTransformerModule$$;
function $ButtonGroupModule$$() {
  this.$_selector$ = ".j-button-group"
}
$tuna$utils$extend$$($ButtonGroupModule$$, $tuna$ui$Module$$);
$ButtonGroupModule$$.prototype.$initInstance$ = function $$ButtonGroupModule$$$$$initInstance$$($target$$71$$) {
  return new $tuna$ui$buttons$ButtonGroup$$($target$$71$$)
};
$tuna$ui$__typeTable$$["button-group"] = new $ButtonGroupModule$$;
function $SWFModule$$() {
  this.$_selector$ = ".j-swf"
}
$tuna$utils$extend$$($SWFModule$$, $tuna$ui$Module$$);
$SWFModule$$.prototype.$initInstance$ = function $$SWFModule$$$$$initInstance$$($target$$72$$) {
  return new $tuna$ui$flash$SWF$$($target$$72$$)
};
$tuna$ui$__typeTable$$.swf = new $SWFModule$$;
function $InputFilterModule$$() {
  this.$_selector$ = ".j-input-filter"
}
$tuna$utils$extend$$($InputFilterModule$$, $tuna$ui$Module$$);
$InputFilterModule$$.prototype.$initInstance$ = function $$InputFilterModule$$$$$initInstance$$($target$$73$$) {
  return new $tuna$ui$forms$InputFilter$$($target$$73$$)
};
$tuna$ui$__typeTable$$["input-filter"] = new $InputFilterModule$$;
function $AutocompleteModule$$() {
  this.$_selector$ = ".j-autocomplete"
}
$tuna$utils$extend$$($AutocompleteModule$$, $tuna$ui$Module$$);
$AutocompleteModule$$.prototype.$initInstance$ = function $$AutocompleteModule$$$$$initInstance$$($target$$74$$) {
  return new $tuna$ui$forms$Autocomplete$$($target$$74$$)
};
$tuna$ui$__typeTable$$.autocomplete = new $AutocompleteModule$$;
function $FormModule$$() {
  this.$_selector$ = "form.j-form"
}
$tuna$utils$extend$$($FormModule$$, $tuna$ui$Module$$);
$FormModule$$.prototype.$initInstance$ = function $$FormModule$$$$$initInstance$$($target$$75$$) {
  return new $tuna$ui$forms$Form$$($target$$75$$)
};
$tuna$ui$__typeTable$$.form = new $FormModule$$;
function $CarouselModule$$() {
  this.$_selector$ = ".j-carousel"
}
$tuna$utils$extend$$($CarouselModule$$, $tuna$ui$Module$$);
$CarouselModule$$.prototype.$initInstance$ = function $$CarouselModule$$$$$initInstance$$($target$$76$$) {
  return new $tuna$ui$selection$Carousel$$($target$$76$$)
};
$tuna$ui$__typeTable$$.carousel = new $CarouselModule$$;
window.main = function $window$main$($body$$1$$) {
  $tuna$dom$__selectorEngine$$ = Sizzle;
  $tuna$control$__mainController$$.$init$($body$$1$$)
};
function $MainController$$() {
  $tuna$control$ViewController$$.call(this);
  this.$_modules$ = ["popup"]
}
$tuna$utils$extend$$($MainController$$, $tuna$control$ViewController$$);
$tuna$control$__mainController$$ = new $MainController$$;

