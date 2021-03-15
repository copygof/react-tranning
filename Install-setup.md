# Setting environment for development

### For Window

---

### Install tools

- Node 12 LTS
- npm install -g react-native-cli
- Chocolatey (Tools for install JDK)

  1. Open power shell (Run admin)
  2. Enter this command to power shell `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`
  3. Install JDK with command `choco install -y openjdk8`

- Install Android Studio
  - Next Next Next
- Install the Android SDK (android 10.0 Q)

### Configuration

- Set path `ANDROID_HOME` environment variable

  1. Types `Window key + Q` and search `Edit the system environment variables` then enter
  2. Click `Environment variables`
  3. On section "User variables for xxx" click on **New** button
  4. Add "Variable name:" `ANDROID_HOME` and "Variable value:" `%LOCALAPPDATA%\AppData\Local\Android\Sdk` and click on **OK** button
  5. On section "User variables for xxx" click on **Path** and then click **Edit** button
  6. Add new variable `%ANDROID_HOME%\platform-tools` and `%ANDROID_HOME%\tools`
  7. Save all re-open cmd and test variable with command `adb`, It should working correctly.

- Set path `JAVA_HOME` environment variable

  1. Open Environment variables same set path android step 1 - 2
  2. On section "System variables" click on **New** button
  3. Add "Variable name:" `JAVA_HOME` and "Variable value:" `C:\Program Files\OpenJDK\openjdk-xxx` and click on **OK** button
  > Node : xxx is depend on jdk version install Please check in folder ` C:\Program Files\OpenJDK\` again.
  4.  Save all re-open cmd and test variable with command `echo %JAVA_HOME` should be display jdk path in cmd.

### Test run app.
- Open cmd
- Create new react-native application with command `react-native init MyApp`
- `cd MyApp` and run `react-native run-android`
- It's should running success without error.

