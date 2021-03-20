#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config
touch $APPCENTER_SOURCE_DIRECTORY/.env
echo 
ENV_WHITELIST=${ENV_WHITELIST:-"^REACT_APP_"}
printf "Logg whitelist:\n"
printf "%s\n" $ENV_WHITELIST
set | egrep -e $ENV_WHITELIST | sed 's/^//g' > $APPCENTER_SOURCE_DIRECTORY/.env
printf "REACT_APP_APPCENTER_BUILD_ID=$APPCENTER_BUILD_ID" >> $APPCENTER_SOURCE_DIRECTORY/.env
printf "\n.env Log after create .env:\n\n"
cat $APPCENTER_SOURCE_DIRECTORY/.env
