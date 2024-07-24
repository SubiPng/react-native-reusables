import { Link, router } from 'expo-router';
import {
  BookCheck,
  Building,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Medal,
  MessageCircleQuestion,
  MessageSquareWarning,
  PiggyBank,
} from 'lucide-react-native';
import { colorScheme } from 'nativewind';
import * as React from 'react';
import { Platform, View } from 'react-native';
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
    <View className='flex-1 p-6 gap-6'>
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
                <Text style={{ fontSize: 12, textAlign: 'center' }}>34/90</Text>
              </CardHeader>
            </Card>
            <Card className='w-25 mx-aut'>
              <CardHeader>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Institute</Text>
                <Text style={{ fontSize: 12, textAlign: 'center' }}>MIIT</Text>
              </CardHeader>
            </Card>
            <Card className='w-25 mx-aut'>
              <CardHeader>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Semester</Text>
                <Text style={{ fontSize: 12, textAlign: 'center' }}>3</Text>
              </CardHeader>
            </Card>
          </View>
        </CardHeader>
        <CardContent className='gap-8'></CardContent>
      </Card>
      <View className='gap-5 flex-row'>
        <Button
          variant='outline'
          style={{ height: 110, width: 110 }}
          onPress={() => router.push('/job-details/')}
        >
          <Text>My Courses</Text>
        </Button>
        <Button
          variant='outline'
          style={{ height: 110, width: 110 }}
          onPress={() => router.push('/job-details/')}
        >
          <Text>My Results</Text>
        </Button>
        <Button
          variant='outline'
          style={{ height: 110, width: 110 }}
          onPress={() => router.push('/job-details/')}
        >
          <Text numberOfLines={1}>My Timetable</Text>
        </Button>
      </View>
    </View>
  );
};

const contentInsets = {
  left: 12,
  right: 12,
};

export default Academic;
