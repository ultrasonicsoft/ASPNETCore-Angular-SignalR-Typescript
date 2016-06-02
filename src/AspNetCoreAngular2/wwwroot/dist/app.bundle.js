webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(181);
	var router_deprecated_1 = __webpack_require__(280);
	var http_1 = __webpack_require__(312);
	var app_component_1 = __webpack_require__(333);
	var signalRService_1 = __webpack_require__(595);
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
	    router_deprecated_1.ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    signalRService_1.SignalRService,
	    core_1.bind(common_1.LocationStrategy).toClass(common_1.HashLocationStrategy),
	    core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })
	]);


/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_deprecated_1 = __webpack_require__(280);
	var dashboard_component_1 = __webpack_require__(334);
	var about_component_1 = __webpack_require__(600);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            templateUrl: 'app/app.component.html',
	            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
	            styleUrls: ['app/app.component.css']
	        }),
	        router_deprecated_1.RouteConfig([
	            { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
	            { path: '/about', name: 'About', component: about_component_1.AboutComponent },
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(181);
	var foodcomponent_1 = __webpack_require__(335);
	var chatComponent_1 = __webpack_require__(597);
	var cpuComponent_1 = __webpack_require__(599);
	var DashboardComponent = (function () {
	    function DashboardComponent() {
	        this.message = 'Hello from HomeComponent constructor';
	    }
	    DashboardComponent = __decorate([
	        core_1.Component({
	            selector: 'dashboard',
	            templateUrl: 'app/components/dashboard/dashboard.component.html',
	            directives: [common_1.CORE_DIRECTIVES, foodcomponent_1.FoodComponent, chatComponent_1.ChatComponent, cpuComponent_1.CpuComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DashboardComponent);
	    return DashboardComponent;
	}());
	exports.DashboardComponent = DashboardComponent;


/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(181);
	var foodDataService_1 = __webpack_require__(336);
	var signalRService_1 = __webpack_require__(595);
	var FoodItem_1 = __webpack_require__(596);
	var FoodComponent = (function () {
	    function FoodComponent(_dataService, _signalRService) {
	        this._dataService = _dataService;
	        this._signalRService = _signalRService;
	        this.canAddFood = _signalRService.connectionExists;
	        this.currentFoodItem = new FoodItem_1.FoodItem();
	    }
	    FoodComponent.prototype.ngOnInit = function () {
	        this.subscribeToEvents();
	    };
	    FoodComponent.prototype.saveFood = function () {
	        var _this = this;
	        if (this.currentFoodItem.Id) {
	            this._dataService
	                .Update(this.currentFoodItem.Id, this.currentFoodItem)
	                .subscribe(function (data) {
	                _this.currentFoodItem = new FoodItem_1.FoodItem();
	            }, function (error) {
	                console.log(error);
	            }, function () { return console.log('Update complete'); });
	        }
	        else {
	            this._dataService
	                .AddFood(this.currentFoodItem.ItemName)
	                .subscribe(function (data) {
	                _this.currentFoodItem = new FoodItem_1.FoodItem();
	            }, function (error) {
	                console.log(error);
	            }, function () { return console.log('Added complete'); });
	        }
	    };
	    FoodComponent.prototype.deleteFoodItem = function (foodItem) {
	        this._dataService.DeleteFood(foodItem.Id)
	            .subscribe(function (response) {
	        }, function (error) {
	            console.log(error);
	        }, function () {
	            console.log('Deleted complete');
	        });
	    };
	    FoodComponent.prototype.setFoodItemToEdit = function (foodItem) {
	        this.currentFoodItem = foodItem;
	    };
	    FoodComponent.prototype.getAllFood = function () {
	        var _this = this;
	        this._dataService
	            .GetAllFood()
	            .subscribe(function (data) { return _this.foodItems = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all Foods complete ' + _this.foodItems); });
	    };
	    FoodComponent.prototype.subscribeToEvents = function () {
	        var _this = this;
	        this._signalRService.connectionEstablished.subscribe(function () {
	            _this.canAddFood = true;
	            _this.getAllFood();
	        });
	        this._signalRService.foodchanged.subscribe(function () {
	            _this.getAllFood();
	        });
	    };
	    FoodComponent = __decorate([
	        core_1.Component({
	            selector: 'food-component',
	            providers: [foodDataService_1.DataService],
	            templateUrl: 'app/components/food/food.component.html',
	            directives: [common_1.CORE_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [foodDataService_1.DataService, signalRService_1.SignalRService])
	    ], FoodComponent);
	    return FoodComponent;
	}());
	exports.FoodComponent = FoodComponent;


/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var http_1 = __webpack_require__(312);
	var Rx_1 = __webpack_require__(337);
	var app_constants_1 = __webpack_require__(594);
	var DataService = (function () {
	    function DataService(_http) {
	        var _this = this;
	        this._http = _http;
	        this.GetAllFood = function () {
	            return _this._http.get(_this.actionUrl)
	                .map(function (response) { return response.json(); })
	                .catch(_this.handleError);
	        };
	        this.GetSingleFood = function (id) {
	            return _this._http.get(_this.actionUrl + id)
	                .map(function (response) { return response.json(); })
	                .catch(_this.handleError);
	        };
	        this.AddFood = function (foodName) {
	            var toAdd = JSON.stringify({ ItemName: foodName });
	            return _this._http.post(_this.actionUrl, toAdd, { headers: _this.headers })
	                .map(function (response) { return response.json(); })
	                .catch(_this.handleError);
	        };
	        this.Update = function (id, foodToUpdate) {
	            return _this._http.put(_this.actionUrl + id, JSON.stringify(foodToUpdate), { headers: _this.headers })
	                .map(function (response) { return response.json(); })
	                .catch(_this.handleError);
	        };
	        this.DeleteFood = function (id) {
	            return _this._http.delete(_this.actionUrl + id)
	                .catch(_this.handleError);
	            ;
	        };
	        this.actionUrl = app_constants_1.CONFIGURATION.baseUrls.server +
	            app_constants_1.CONFIGURATION.baseUrls.apiUrl +
	            'foodItems/';
	        this.headers = new http_1.Headers();
	        this.headers.append('Content-Type', 'application/json');
	        this.headers.append('Accept', 'application/json');
	    }
	    DataService.prototype.handleError = function (error) {
	        console.error(error);
	        return Rx_1.Observable.throw(error.json().error || 'Server error');
	    };
	    DataService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], DataService);
	    return DataService;
	}());
	exports.DataService = DataService;


/***/ },

/***/ 594:
/***/ function(module, exports) {

	"use strict";
	exports.CONFIGURATION = {
	    baseUrls: {
	        server: 'http://localhost:5000/',
	        apiUrl: 'api/',
	    },
	};


/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var app_constants_1 = __webpack_require__(594);
	var SignalRService = (function () {
	    function SignalRService() {
	        this.proxyName = 'coolmessages';
	        this.foodchanged = new core_1.EventEmitter();
	        this.connectionEstablished = new core_1.EventEmitter();
	        this.messageReceived = new core_1.EventEmitter();
	        this.newCpuValue = new core_1.EventEmitter();
	        this.connectionExists = false;
	        this.connection = $.hubConnection(app_constants_1.CONFIGURATION.baseUrls.server + 'signalr/');
	        this.proxy = this.connection.createHubProxy(this.proxyName);
	        this.registerOnServerEvents();
	        this.startConnection();
	    }
	    SignalRService.prototype.sendChatMessage = function (message) {
	        this.proxy.invoke('SendMessage', message);
	    };
	    SignalRService.prototype.startConnection = function () {
	        var _this = this;
	        this.connection.start().done(function (data) {
	            console.log('Now connected ' + data.transport.name + ', connection ID= ' + data.id);
	            _this.connectionEstablished.emit(true);
	            _this.connectionExists = true;
	        }).fail(function (error) {
	            console.log('Could not connect ' + error);
	            _this.connectionEstablished.emit(false);
	        });
	    };
	    SignalRService.prototype.registerOnServerEvents = function () {
	        var _this = this;
	        this.proxy.on('FoodAdded', function (data) {
	            _this.foodchanged.emit('this could be data');
	        });
	        this.proxy.on('FoodDeleted', function (data) {
	            _this.foodchanged.emit('this could be data');
	        });
	        this.proxy.on('FoodUpdated', function (data) {
	            _this.foodchanged.emit('this could be data');
	        });
	        this.proxy.on('SendMessage', function (data) {
	            console.log('received in SignalRService: ' + data);
	            _this.messageReceived.emit(data);
	        });
	        this.proxy.on('newCpuValue', function (data) {
	            _this.newCpuValue.emit(data);
	        });
	    };
	    SignalRService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], SignalRService);
	    return SignalRService;
	}());
	exports.SignalRService = SignalRService;


/***/ },

/***/ 596:
/***/ function(module, exports) {

	"use strict";
	var FoodItem = (function () {
	    function FoodItem() {
	    }
	    return FoodItem;
	}());
	exports.FoodItem = FoodItem;


/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(181);
	var signalRService_1 = __webpack_require__(595);
	var ChatMessage_1 = __webpack_require__(598);
	var ChatComponent = (function () {
	    function ChatComponent(_signalRService) {
	        this._signalRService = _signalRService;
	        this.subscribeToEvents();
	        this.canSendMessage = _signalRService.connectionExists;
	        this.currentMessage = new ChatMessage_1.ChatMessage('', null);
	        this.allMessages = new Array();
	    }
	    ChatComponent.prototype.sendMessage = function () {
	        if (this.canSendMessage) {
	            this.currentMessage.Sent = new Date();
	            this._signalRService.sendChatMessage(this.currentMessage);
	        }
	    };
	    ChatComponent.prototype.subscribeToEvents = function () {
	        var _this = this;
	        this._signalRService.connectionEstablished.subscribe(function () {
	            _this.canSendMessage = true;
	        });
	        this._signalRService.messageReceived.subscribe(function (message) {
	            _this.currentMessage = new ChatMessage_1.ChatMessage('', null);
	            _this.allMessages.push(new ChatMessage_1.ChatMessage(message.Message, message.Sent.toString()));
	        });
	    };
	    ChatComponent = __decorate([
	        core_1.Component({
	            selector: 'chat-component',
	            templateUrl: 'app/components/chat/chat.component.html',
	            directives: [common_1.CORE_DIRECTIVES],
	        }), 
	        __metadata('design:paramtypes', [signalRService_1.SignalRService])
	    ], ChatComponent);
	    return ChatComponent;
	}());
	exports.ChatComponent = ChatComponent;


/***/ },

/***/ 598:
/***/ function(module, exports) {

	"use strict";
	var ChatMessage = (function () {
	    function ChatMessage(message, date) {
	        this.Message = message;
	        this.Sent = new Date(date);
	    }
	    return ChatMessage;
	}());
	exports.ChatMessage = ChatMessage;


/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(181);
	var signalRService_1 = __webpack_require__(595);
	var CpuComponent = (function () {
	    function CpuComponent(_signalRService) {
	        this._signalRService = _signalRService;
	    }
	    CpuComponent.prototype.ngOnInit = function () {
	        this.subscribeToEvents();
	    };
	    CpuComponent.prototype.subscribeToEvents = function () {
	        var _this = this;
	        this._signalRService.newCpuValue.subscribe(function (cpuValue) {
	            _this.cpuValue = cpuValue;
	        });
	    };
	    CpuComponent = __decorate([
	        core_1.Component({
	            selector: 'cpu-component',
	            templateUrl: 'app/components/cpu/cpu.component.html',
	            directives: [common_1.CORE_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [signalRService_1.SignalRService])
	    ], CpuComponent);
	    return CpuComponent;
	}());
	exports.CpuComponent = CpuComponent;


/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var AboutComponent = (function () {
	    function AboutComponent() {
	    }
	    AboutComponent = __decorate([
	        core_1.Component({
	            selector: 'about',
	            templateUrl: 'app/components/about/about.component.html',
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AboutComponent);
	    return AboutComponent;
	}());
	exports.AboutComponent = AboutComponent;


/***/ }

});
//# sourceMappingURL=app.bundle.js.map