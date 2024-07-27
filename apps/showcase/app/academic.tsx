import { FlashList } from '@shopify/flash-list';
import { Link, router } from 'expo-router';
import {
  ALargeSmall,
  BookCheck,
  Building,
  Calculator,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Medal,
  MessageCircleQuestion,
  MessageSquareWarning,
  NotebookTabs,
  PiggyBank,
  Stamp,
  Table,
  Table2,
} from 'lucide-react-native';
import { colorScheme } from 'nativewind';
import * as React from 'react';
import { Platform, ScrollView, View } from 'react-native';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '~/components/ui/context-menu';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/components/ui/hover-card';
import { Text } from '~/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { Muted } from '~/components/ui/typography';
import { CalendarDays } from '~/lib/icons/CalendarDays';
import { ChevronDown } from '~/lib/icons/ChevronDown';
import { ChevronRight } from '~/lib/icons/ChevronRight';
import { Info } from '~/lib/icons/Info';
import { cn } from '~/lib/utils';

const Academic = () => {
  return (
    <View className='flex-1 p-6'>
      <Card className='w-full max-w-lg mx-aut'>
        <CardHeader>
          <View className='flex-row  gap-3'>
            <CardTitle className='pt-1'>My Academic</CardTitle>
            <Tooltip delayDuration={150}>
              <TooltipTrigger className='web:focus:outline-none'>
                <Info size={Platform.OS == 'web' ? 14 : 16} className='text-foreground' />
              </TooltipTrigger>
              <TooltipContent side='bottom' insets={contentInsets} className='gap-1 py-3 px-5'>
                <Text className='native:text-lg font-bold'>Things to try:</Text>
                <Text className='native:text-lg text-muted-foreground'>
                  · {Platform.OS === 'web' ? 'Hover' : 'Press'} the team member's name
                </Text>
                <Text className='native:text-lg text-muted-foreground'>
                  · {Platform.OS === 'web' ? 'Right click' : 'Press and hold'} the avatar
                </Text>
              </TooltipContent>
            </Tooltip>
          </View>
          <CardDescription>See your academic performance. </CardDescription>
          <Text></Text>
          <View className='flex-row  gap-3'>
            <Card className='w-25 mx-aut'>
              <CardHeader>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Total Credit</Text>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>34/90</Text>
              </CardHeader>
            </Card>
            <Card className='w-25 mx-aut'>
              <CardHeader>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Institute</Text>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>MIIT</Text>
              </CardHeader>
            </Card>
            <Card className='w-25 mx-aut'>
              <CardHeader>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Semester</Text>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>3</Text>
              </CardHeader>
            </Card>
          </View>
        </CardHeader>
      </Card>
      <View className='mt-5'>
        <Link href={'/alert'} asChild>
          <Button
            variant='secondary'
            size='lg'
            className={cn(
              'bg-secondary/40 pl-4 pr-1.5 border-x border-t border-foreground/5 rounded-none flex-row justify-between rounded-t-lg'
            )}
          >
            <View className='flex-row gap-3'>
              <NotebookTabs className='text-foreground' />
              <Text className='text-xl'>My Courses</Text>
            </View>
            <ChevronRight className='text-foreground/50' />
          </Button>
        </Link>
        <Link href={'/alert'} asChild>
          <Button
            variant='secondary'
            size='lg'
            className={cn(
              'bg-secondary/40 pl-4 pr-1.5 border-x border-t border-foreground/5 rounded-none flex-row justify-between'
            )}
          >
            <View className='flex-row gap-3'>
              <ALargeSmall className='text-foreground' />
              <Text className='text-xl'>My Results</Text>
            </View>
            <ChevronRight className='text-foreground/50' />
          </Button>
        </Link>
        <Link href={'/alert'} asChild>
          <Button
            variant='secondary'
            size='lg'
            className={cn(
              'bg-secondary/40 pl-4 pr-1.5 border-x border-t border-foreground/5 rounded-none flex-row justify-between'
            )}
          >
            <View className='flex-row gap-3'>
              <Table2 className='text-foreground' />
              <Text className='text-xl'>My Timetable</Text>
            </View>
            <ChevronRight className='text-foreground/50' />
          </Button>
        </Link>
        <Link href={'/alert'} asChild>
          <Button
            variant='secondary'
            size='lg'
            className={cn(
              'bg-secondary/40 pl-4 pr-1.5 border-x border-t border-foreground/5 rounded-none flex-row justify-between'
            )}
          >
            <View className='flex-row gap-3'>
              <Table className='text-foreground' />
              <Text className='text-xl'>Academic Calendar</Text>
            </View>
            <ChevronRight className='text-foreground/50' />
          </Button>
        </Link>
        <Link href={'/alert'} asChild>
          <Button
            variant='secondary'
            size='lg'
            className={cn(
              'bg-secondary/40 pl-4 pr-1.5 border-x border-t border-foreground/5 rounded-none flex-row justify-between'
            )}
          >
            <View className='flex-row gap-3'>
              <Stamp className='text-foreground' />
              <Text className='text-xl'>Semester Registration</Text>
            </View>
            <ChevronRight className='text-foreground/50' />
          </Button>
        </Link>
        <Link href={'/alert'} asChild>
          <Button
            variant='secondary'
            size='lg'
            className={cn(
              'bg-secondary/40 pl-4 pr-1.5 border-x border-t border-foreground/5 rounded-none flex-row justify-between'
            )}
          >
            <View className='flex-row gap-3'>
              <BookCheck className='text-foreground' />
              <Text className='text-xl'>Attendance</Text>
            </View>
            <ChevronRight className='text-foreground/50' />
          </Button>
        </Link>
        <Link href={'/alert'} asChild>
          <Button
            variant='secondary'
            size='lg'
            className={cn(
              'bg-secondary/40 pl-4 pr-1.5 border-x border-t border-foreground/5 rounded-none flex-row justify-between'
            )}
          >
            <View className='flex-row gap-3'>
              <Stamp className='text-foreground' />
              <Text className='text-xl'>Course Registration</Text>
            </View>
            <ChevronRight className='text-foreground/50' />
          </Button>
        </Link>
        <Link href={'/alert'} asChild>
          <Button
            variant='secondary'
            size='lg'
            className={cn(
              'bg-secondary/40 pl-4 pr-1.5 border-x border-t border-foreground/5 rounded-none flex-row justify-between border-b rounded-b-lg'
            )}
          >
            <View className='flex-row gap-3'>
              <Calculator className='text-foreground' />
              <Text className='text-xl'>CGPA Calculator</Text>
            </View>
            <ChevronRight className='text-foreground/50' />
          </Button>
        </Link>
      </View>
    </View>
  );
};

const contentInsets = {
  left: 12,
  right: 12,
};

export default Academic;
