import Array "mo:core/Array";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  public type ContactSubmission = {
    name : Text;
    phoneOrEmail : Text;
    message : Text;
    timestamp : Int;
    submittedBy : Principal;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();
  let submissions = Map.empty<Int, ContactSubmission>();

  // User profile management functions (required by frontend)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact form submission - open to all users including guests
  public shared ({ caller }) func submitContactForm(name : Text, phoneOrEmail : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      phoneOrEmail;
      message;
      timestamp = Time.now();
      submittedBy = caller;
    };
    submissions.add(submission.timestamp, submission);
  };

  // Admin-only: fetch all contact submissions
  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view contact submissions");
    };
    submissions.values().toArray();
  };

  // Public query: get location information
  public query ({ caller }) func getLocationInfo() : async Text {
    "Signature Millenia 1, Gurugram, Haryana";
  };
};
