/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"361914095676"] forKey:@"com.pushjaw.googlecloudmessaging.sender_id"];
    [_property setObject:[NSNumber numberWithInt:[TiUtils intValue:@"2130837504"]] forKey:@"com.pushjaw.googlecloudmessaging.icon"];
    [_property setObject:[TiUtils stringValue:@"gcm.gcm/gcm.gcm.GcmActivity"] forKey:@"com.pushjaw.googlecloudmessaging.component"];

    return _property;
}
@end
