#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"imagefactory",@"name",@"ti.imagefactory",@"moduleid",@"1.1",@"version",@"0aab25d7-0486-40ab-94a3-ed4f9a293414",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end
